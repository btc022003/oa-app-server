import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/base/base.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AttendanceData } from './entities/attendance.entity';
import { twoPointDistance } from 'src/utils/tools';

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
  async checkIn(userId: string, data: AttendanceData) {
    const checkPositions = await this.prisma.checkPosition.findMany({
      where: {},
    });

    // 判断打卡范围
    if (data.lat && data.lng) {
      let isValidatePosition = false;
      for (let i = 0; i < checkPositions.length; i++) {
        if (
          twoPointDistance(
            data.lat,
            data.lng,
            checkPositions[i].lat,
            checkPositions[i].lng,
          ) < 0.5
        ) {
          isValidatePosition = true;
          break;
        }
      }
      // twoPointDistance()
      if (checkPositions.length > 0) {
        if (isValidatePosition) {
          return this.prisma.attendance.create({
            data: {
              employeeId: userId,
              remarks: data.remarks,
            },
          });
        } else {
          return {
            success: false,
            errorMessage: '当前不在打卡范围',
            data: '当前不在打卡范围',
          };
        }
      } else {
        return this.prisma.attendance.create({
          data: {
            employeeId: userId,
            remarks: data.remarks + ', 未设置打开范围，任意打卡',
          },
        });
      }
    } else {
      return {
        success: false,
        errorMessage: '当前坐标不能为空',
        data: '请输入坐标信息',
      };
    }
  }
}
