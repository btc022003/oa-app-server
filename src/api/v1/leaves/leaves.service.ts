import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/base/base.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeavesService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.leave, {
      employee: true,
      leaveCategory: true,
    });
  }

  /**
   * 创建请假记录
   * @param data     数据
   * @param checkers 审批人
   * @returns
   */
  async create(data: any, checkers: string[] = []) {
    // console.log(data);
    const leave = await this.prisma.leave.create({
      data: {
        ...data,
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
        durations: Number(data.durations),
      },
    });

    // 添加审批记录
    await Promise.all(
      checkers.map((item, index) =>
        this.prisma.leaveCheckLog.create({
          data: {
            employeeId: item,
            leaveId: leave.id,
            lev: index,
          },
        }),
      ),
    );

    return leave;
  }

  /**
   * 审批请假
   * @param id
   * @param isCheck
   * @returns
   */
  async checkLog(id: string, isCheck = true, ownerId = '') {
    const log = await this.prisma.leaveCheckLog.findFirst({
      where: {
        id,
      },
    });
    // 判断审批数据是否存在以及是否是自己的
    if (log && log.employeeId == ownerId) {
      return this.prisma.leaveCheckLog.update({
        where: {
          id,
        },
        data: {
          isCheck,
        },
      });
    }
    return {
      success: false,
      errorMessage: '需要审批的记录不存在',
      data: '',
    };
  }
}
