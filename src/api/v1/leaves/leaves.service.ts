import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/base/base.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LeavesService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.leave, {
      employee: {
        include: {
          department: true,
        },
      },
      leaveCategory: true,
      leaveCheckLogs: {
        include: {
          owner: true,
        },
      },
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
        // employId,
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
   * 获取待我审批的记录
   * @param ownerId
   * @returns
   */
  async loadCheckLogs(ownerId: string, page: number, per: number) {
    page = isNaN(page) ? 1 : page * 1;
    per = isNaN(per) ? 10 : per * 1;
    const where = { employeeId: ownerId };
    const list = await this.prisma.leaveCheckLog.findMany({
      where,
      skip: (page - 1) * per,
      take: per * 1,
      include: {
        owner: {
          include: {
            department: true,
          },
        },
        leave: {
          include: {
            employee: {
              include: {
                department: true,
              },
            },
            leaveCategory: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    const total = await this.prisma.leaveCheckLog.count({ where });
    return {
      list,
      current: page,
      pageSize: per,
      total,
    };
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
