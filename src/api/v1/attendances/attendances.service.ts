import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/base/base.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendancesService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.attendance, {
      employee: {
        include: {
          department: true,
        },
      },
    });
  }

  /**
   * 打卡签到
   * @param userId
   * @param remarks
   * @returns
   */
  checkIn(userId: string, remarks: string) {
    return this.prisma.attendance.create({
      data: {
        employeeId: userId,
        remarks,
      },
    });
  }
}
