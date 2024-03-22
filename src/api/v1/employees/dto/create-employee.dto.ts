import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {}

export class ModifyPwdBody {
  @ApiProperty({
    description: '新密码',
    default: '',
  })
  @IsNotEmpty({
    message: '新密码不能为空',
  })
  password: string;
  @ApiProperty({
    description: '原始密码',
    default: '',
  })
  @IsNotEmpty({
    message: '原始密码不能为空',
  })
  oldPassword;
}
