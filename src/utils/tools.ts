import { UnauthorizedException } from '@nestjs/common';
import { createHash } from 'crypto';
import * as _ from 'lodash';
import * as dayjs from 'dayjs';
// import JWT from 'jsonwebtoken';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const JWT = require('jsonwebtoken');
// import {} from 'jwt'
const salt = 'Arivin'; // 拼接随机数防破解
/**
 * 密码加密
 * @param {*} pwd
 * @returns
 */
export function encodePwd(pwd) {
  return createHash('md5')
    .update(pwd + salt)
    .digest('hex');
}

/**
 * 生成token
 * @param data
 * @returns
 */
export const generateToken = (data) => {
  return JWT.sign(data, salt, {
    expiresIn: '10h',
  });
};

/**
 * 验证token
 * @param token token
 * @param cb    回调函数
 */
export const validateToken = (token, cb) => {
  JWT.verify(token, salt, function (err, data) {
    if (err) {
      // console.log(err);
      // cb({ code: false, data: {} });
      throw new UnauthorizedException();
    } else {
      cb({
        code: true,
        data,
      });
    }
  });
};

/**
 * 生成验证码
 * @returns
 */
export const generateCaptcha = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return _.sampleSize(arr, 4).join('');
};

/**
 * 判断验证码时间是否过期
 * @param createdAt
 * @returns
 */
export const validateCaptchaIsOutDated = (createdAt: Date) => {
  const duration = dayjs().diff(dayjs(createdAt), 's');
  return duration > 200;
};

/**
 * 两周前
 * @returns
 */
export const beforeTwoWeeks = () => dayjs().add(-2, 'w');
