import { Module } from '@nestjs/common';
import { CheckPositionsService } from './check_positions.service';
import { CheckPositionsController } from './check_positions.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CheckPositionsController],
  providers: [CheckPositionsService, PrismaService],
})
export class CheckPositionsModule {}
