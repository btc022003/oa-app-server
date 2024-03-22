import { Body, Controller, Post, Req } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { BaseController } from 'src/api/base/base.controller';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateLeaveDto } from './dto/create-leaf.dto';

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
    return this.leavesService.create({
      ...data,
      employeeId: req.user.id,
    });
  }
}
