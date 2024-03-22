import { Module } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { LeavesController } from './leaves.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LeavesController],
  providers: [LeavesService, PrismaService],
})
export class LeavesModule {}
