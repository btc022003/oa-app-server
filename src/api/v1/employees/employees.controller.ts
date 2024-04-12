import {
  Controller,
  Get,
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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('员工管理')
@Controller('/api/v1/employees')
export class EmployeesController extends BaseController {
  constructor(private readonly employeesService: EmployeesService) {
    super(employeesService);
  }

  @ApiOperation({
    summary: '获取提交请假时候，负责审批的人的数据',
  })
  @Get('user/leave_checkers')
  loadLeaveChecksInfo() {
    return this.employeesService.loadLeaveCheckers();
  }

  @ApiOperation({
    summary: '获取当前登录的用户信息',
  })
  @Get('user/info')
  loadInfo(@Req() req) {
    return this.employeesService.findOne(req.user.id);
  }

  @ApiOperation({
    summary: '重置指定用户的密码',
  })
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

  @ApiOperation({
    summary: '修改用户密码',
  })
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
