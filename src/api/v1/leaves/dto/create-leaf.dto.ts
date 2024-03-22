import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateLeaveDto {
  @ApiProperty({
    description: '开始时间, yyyy-mm-dd hh-mm-ss',
    default: '',
  })
  @IsNotEmpty({
    message: '开始时间不能为空',
  })
  startTime: string;

  @ApiProperty({
    description: '结束时间, yyyy-mm-dd hh-mm-ss',
    default: '',
  })
  @IsNotEmpty({
    message: '结束时间不能为空',
  })
  endTime: string;

  @ApiProperty({
    description: '请假时长',
    default: 1,
  })
  @IsNotEmpty({
    message: '请输入请假时长',
  })
  durations: number;
}
