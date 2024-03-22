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

  create(data: any) {
    // console.log(data);
    return this.prisma.leave.create({
      data: {
        ...data,
        startTime: new Date(data.startTime),
        endTime: new Date(data.endTime),
        durations: Number(data.durations),
      },
    });
  }
}
