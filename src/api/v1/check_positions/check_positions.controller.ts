import { Controller } from '@nestjs/common';
import { CheckPositionsService } from './check_positions.service';
import { BaseController } from 'src/api/base/base.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('打卡范围')
@Controller('/api/v1/check_positions')
export class CheckPositionsController extends BaseController {
  constructor(private readonly checkPositionsService: CheckPositionsService) {
    super(checkPositionsService);
  }
}
