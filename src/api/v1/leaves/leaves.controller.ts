import { Body, Controller, Post, Req } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { BaseController } from 'src/api/base/base.controller';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CheckLog, CreateLeaveDto } from './dto/create-leaf.dto';

@ApiTags('请假记录')
@Controller('/api/v1/leaves')
export class LeavesController extends BaseController {
  constructor(private readonly leavesService: LeavesService) {
    super(leavesService);
  }

  @ApiOperation({
    summary: '员工请假',
  })
  @Post('user/leave')
  askLeave(@Req() req, @Body() data: CreateLeaveDto) {
    //
    const { checkers, ...leaveInfo } = data;
    return this.leavesService.create(
      {
        ...leaveInfo,
        employeeId: req.user.id,
      },
      checkers.split(','),
    );
  }

  @ApiOperation({
    summary: '员工请假审批',
  })
  @Post('user/leave')
  checkLeaveLog(@Req() req, @Body() data: CheckLog) {
    //
    return this.leavesService.checkLog(data.logId, data.isCheck, req.user.id);
  }
}
