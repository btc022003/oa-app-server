import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AttendancesService } from './attendances.service';
import { BaseController } from 'src/api/base/base.controller';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { QueryInfo } from 'src/api/base/dto/base.dto';
import { AttendanceData } from './entities/attendance.entity';

@ApiTags('员工出勤')
@Controller('/api/v1/attendances')
export class AttendancesController extends BaseController {
  constructor(private readonly attendancesService: AttendancesService) {
    super(attendancesService);
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
  index(@Query() query: QueryInfo, @Req() req) {
    const { page, per } = query;
    const where: any = {};

    // 非管理员只能查看自己的记录
    if (req.user.userName != 'admin') {
      where.employeeId = req.user.id;
    }
    // if (query.name) {
    //   where.name = { contains: query.name };
    // }
    return this.attendancesService.findAll(where, page, per);
  }

  @ApiOperation({
    summary: '员工签到',
  })
  @Post('user/check_in')
  checkIn(@Req() req, @Body() info: AttendanceData) {
    // 签到
    return this.attendancesService.checkIn(req.user.id, info);
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
