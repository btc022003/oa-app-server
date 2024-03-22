import { Module } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { AttendancesController } from './attendances.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AttendancesController],
  providers: [AttendancesService, PrismaService],
})
export class AttendancesModule {}
