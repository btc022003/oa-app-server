import {
  Controller,
  // Get,
  // Post,
  // Body,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { ApiTags } from '@nestjs/swagger';
import { BaseController } from 'src/api/base/base.controller';

@ApiTags('组织架构')
@Controller('/api/v1/departments')
export class DepartmentsController extends BaseController {
  constructor(private readonly departmentsService: DepartmentsService) {
    super(departmentsService);
  }
}
