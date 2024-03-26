import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { BaseController } from 'src/api/base/base.controller';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CheckLog, CreateLeaveDto } from './dto/create-leaf.dto';
import { QueryInfo } from 'src/api/base/dto/base.dto';

@ApiTags('请假记录')
@Controller('/api/v1/leaves')
export class LeavesController extends BaseController {
  constructor(private readonly leavesService: LeavesService) {
    super(leavesService);
  }

  @ApiOperation({
    summary: '分页形式获取列表数据',
  })
  @ApiQuery({
    name: 'page',
    description: '页码',
    required: false,
    schema: {
      type: 'integer',
      default: 1,
    },
  })
  @ApiQuery({
    name: 'per',
    description: '每页显示的数量',
    required: false,
    schema: {
      type: 'integer',
      default: 10,
    },
  })
  // @ApiQuery({
  //   name: 'name',
  //   description: '查询关键词,如果用name属性的时候使用',
  //   required: false,
  //   schema: {
  //     type: 'string',
  //     default: '',
  //   },
  // })
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  index(@Query() query: QueryInfo, @Req() req) {
    const { page, per } = query;
    const where: any = { employeeId: req.user.id };
    // if (query.name) {
    //   where.name = { contains: query.name };
    // }
    return this.leavesService.findAll(where, page, per);
  }

  @ApiOperation({
    summary: '员工请假',
  })
  @Post('user/leave')
  askLeave(@Req() req, @Body() data: CreateLeaveDto) {
    console.log(data);
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
    summary: '待审批的请假记录',
  })
  @ApiQuery({
    name: 'page',
    description: '页码',
    required: false,
    schema: {
      type: 'integer',
      default: 1,
    },
  })
  @ApiQuery({
    name: 'per',
    description: '每页显示的数量',
    required: false,
    schema: {
      type: 'integer',
      default: 10,
    },
  })
  @Get('user/leave_need_checks')
  checkLeaveLogNeedCheck(@Query() query: QueryInfo, @Req() req) {
    const { page, per } = query;
    return this.leavesService.loadCheckLogs(req.user.id, page, per);
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
