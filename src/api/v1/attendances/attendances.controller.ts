import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { BaseController } from 'src/api/base/base.controller';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ExtraData, QueryInfo } from 'src/api/base/dto/base.dto';

@ApiTags('员工出勤')
@Controller('/api/v1/attendances')
export class AttendancesController extends BaseController {
  constructor(private readonly attendancesService: AttendancesService) {
    super(attendancesService);
  }

  @ApiOperation({
    summary: '员工签到',
  })
  @Post('user/check_in')
  checkIn(@Req() req, @Body() info: ExtraData) {
    // 签到
    return this.attendancesService.checkIn(req.user.id, info.remarks);
  }

  @ApiOperation({
    summary: '员工打卡记录',
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
  @ApiQuery({
    name: 'start_time',
    description: '开始时间',
    required: false,
    schema: {
      type: 'string',
      default: '',
    },
  })
  @ApiQuery({
    name: 'end_time',
    description: '结束时间',
    required: false,
    schema: {
      type: 'string',
      default: '',
    },
  })
  @Get('user/logs')
  checkLog(
    @Req() req,
    @Query() query: { start_time: string; end_time: string } & QueryInfo,
  ) {
    // 打卡时间间隔
    let duration = {};
    if (query.start_time && query.end_time) {
      duration = {
        createdAt: {
          lte: query.end_time,
          gte: query.start_time,
        },
      };
    }
    return this.attendancesService.findAll(
      {
        employeeId: req.user.id,
        ...duration,
      },
      query.page,
      query.per,
    );
  }
}
