import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class Attendance {}

export class AttendanceData {
  @ApiProperty({
    description: '备注信息',
    // required: true,
  })
  remarks: string;

  @ApiProperty({
    description: '维度',
    // required: true,
  })
  @IsNotEmpty()
  lat: number;

  @ApiProperty({
    description: '经度',
    // required: true,
  })
  @IsNotEmpty()
  lng: number;
}
