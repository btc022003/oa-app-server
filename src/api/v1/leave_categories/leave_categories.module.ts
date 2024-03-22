import { Module } from '@nestjs/common';
import { LeaveCategoriesService } from './leave_categories.service';
import { LeaveCategoriesController } from './leave_categories.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LeaveCategoriesController],
  providers: [LeaveCategoriesService, PrismaService],
})
export class LeaveCategoriesModule {}
