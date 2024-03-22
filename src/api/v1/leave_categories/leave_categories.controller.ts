import { Controller } from '@nestjs/common';
import { LeaveCategoriesService } from './leave_categories.service';
import { BaseController } from 'src/api/base/base.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('请假类型')
@Controller('/api/v1/leave_categories')
export class LeaveCategoriesController extends BaseController {
  constructor(private readonly leaveCategoriesService: LeaveCategoriesService) {
    super(leaveCategoriesService);
  }
}
