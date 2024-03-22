import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { LoginDto } from './dto/create-auth.dto';

@ApiTags('员工登录')
@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly usersService: AuthService) {}

  @ApiOperation({
    summary: '登陆',
  })
  @Post('login')
  async adminLogin(
    @Body() body: LoginDto,
    @Res({ passthrough: true })
    response: Response,
  ) {
    const data = await this.usersService.adminLogin(body.userName, body.pwd);
    // 写用户id到cookie中，调用接口的时候直接传递cookie就好
    data.success
      ? response.cookie('token', data.data, {
          httpOnly: true,
          sameSite: 'none',
          secure: true,
        })
      : '';
    // console.log(data);
    return data;
  }

  @ApiOperation({
    summary: '退出',
  })
  @Get('logout')
  async adminLogOut(
    @Res({ passthrough: true })
    response: Response,
  ) {
    response.cookie('token', '');
    return '退出登录成功';
  }
}
