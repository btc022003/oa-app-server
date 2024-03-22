import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: '用户名',
    default: '',
  })
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  userName: string;
  @ApiProperty({
    description: '密码或者验证码',
    default: '',
  })
  pwd: string;
}
