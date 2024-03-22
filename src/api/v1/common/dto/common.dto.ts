import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class QueryCaptcha {
  @ApiProperty({
    description: '手机号',
    required: true,
  })
  @IsNotEmpty({
    message: '手机号码不能为空',
  })
  mobile: string;
}
