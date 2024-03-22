import {
  Controller,
  // Get,
  Post,
  Body,
  Req,
  Param,
  // Patch,
  // Param,
  // Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { ModifyPwdBody } from './dto/create-employee.dto';
// import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { BaseController } from 'src/api/base/base.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('员工管理')
@Controller('/api/v1/employees')
export class EmployeesController extends BaseController {
  constructor(private readonly employeesService: EmployeesService) {
    super(employeesService);
  }

  // @Get()
  // loadInfo() {

  // }

  @Post('pwd/reset/:id')
  async resetPwd(@Param() params) {
    //
    const user = await this.employeesService.findOne(params.id);
    if (user.userName != 'admin') {
      return this.employeesService.resetPWD(user.id);
    } else {
      return {
        success: false,
        errorMessage: '超级管理员的密码不能重置',
        data: '',
      };
    }
  }

  @Post('pwd/modify')
  modifyPwd(@Req() req, @Body() resetPwd: ModifyPwdBody) {
    //
    if (req.user.userName != 'admin') {
      return this.employeesService.updatePWD(
        req.user.id,
        resetPwd.oldPassword,
        resetPwd.password,
      );
    } else {
      return {
        success: false,
        errorMessage: '超级管理员的密码不建议修改',
        data: '',
      };
    }
  }
}
