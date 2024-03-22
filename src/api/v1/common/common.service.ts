import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as dayjs from 'dayjs';
import { generateCaptcha } from 'src/utils/tools';

@Injectable()
export class CommonService {
  constructor(private readonly prisma: PrismaService) {}
}
