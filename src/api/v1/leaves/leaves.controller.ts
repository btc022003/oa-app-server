import { Controller } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { BaseController } from 'src/api/base/base.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('请假记录')
@Controller('/api/v1/leaves')
export class LeavesController extends BaseController {
  constructor(private readonly leavesService: LeavesService) {
    super(leavesService);
  }
}
