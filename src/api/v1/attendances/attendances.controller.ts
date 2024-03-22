import { Controller } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { BaseController } from 'src/api/base/base.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('员工出勤')
@Controller('/api/v1/attendances')
export class AttendancesController extends BaseController {
  constructor(private readonly attendancesService: AttendancesService) {
    super(attendancesService);
  }
}
