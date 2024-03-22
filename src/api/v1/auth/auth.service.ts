import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { encodePwd, generateToken } from 'src/utils/tools';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  /**
   * 管理后台登录
   * @param userName
   * @param password
   * @returns
   */
  async adminLogin(userName: string, password: string) {
    const user = await this.prisma.employee.findUnique({ where: { userName } });
    if (user) {
      const pwd = encodePwd(password);
      if (pwd == user.password) {
        return {
          success: true,
          errorMessage: '登陆成功',
          data: generateToken({ id: user.id }),
        };
      }
      return {
        success: false,
        errorMessage: '密码错误',
        data: '',
      };
    }
    return {
      success: false,
      errorMessage: '用户信息不存在',
      data: '',
    };
  }
}
