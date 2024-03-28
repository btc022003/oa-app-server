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

// 角度转弧度函数
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

/**
 * 计算两个坐标的距离，返回km为单位的长度
 * @param lat1
 * @param lon1
 * @param lat2
 * @param lon2
 * @returns
 */
export const twoPointDistance: (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) => number = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // 地球半径，单位：千米
  const dLat = deg2rad(lat2 - lat1); // 纬度差，转换为弧度
  const dLon = deg2rad(lon2 - lon1); // 经度差，转换为弧度

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // 距离，单位：千米
  return distance;
};
