import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/base/base.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { encodePwd } from 'src/utils/tools';

@Injectable()
export class EmployeesService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.employee, {
      role: true,
      department: true,
    });
  }

  /**
   * 新增一条记录
   * @param data
   * @returns
   */
  create(data) {
    return this.prisma.employee.create({
      data: {
        ...data,
        password: encodePwd(data.password),
      },
    });
  }

  /**
   * 根据id修改一个
   * @param id
   * @param data
   * @returns
   */
  update(id: string, data) {
    delete data.password;
    return this.model.update({
      where: { id },
      data,
    });
  }

  /**
   * 重置密码
   * @param id
   * @returns
   */
  resetPWD(id: string) {
    return this.prisma.employee.update({
      where: { id },
      data: {
        password: encodePwd('123456'),
      },
    });
  }

  /**
   * 修改密码
   * @param id
   * @param password
   * @returns
   */
  async updatePWD(id: string, oldPassword: string, password: string) {
    //
    const user = await this.prisma.employee.findFirst({ where: { id } });
    if (user.password === encodePwd(oldPassword)) {
      await this.prisma.employee.update({
        where: { id },
        data: {
          password: encodePwd(password),
        },
      });
      return '修改密码成功';
    } else {
      return {
        success: false,
        errorMessage: '原始密码输入错误',
        data: '',
      };
    }
  }

  /**
   * 加载审批人
   * @returns
   */
  async loadLeaveCheckers() {
    return this.prisma.employee.findMany({
      where: {
        isManager: true,
      },
    });
  }
}
