import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as hbs from 'hbs';
import { AllResponseInterceptor } from './all-response/all-response.interceptor';
import { AnyExceptionFilter } from './any-exception/any-exception.filter';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { encodePwd } from './utils/tools';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    //
  });

  const config = new DocumentBuilder()
    .setTitle('通用接口')
    .setDescription('通用接服务器端API接口')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // localhost:3000/docs 访问接口文档

  app.enableCors({ origin: true, credentials: true }); // 允许跨域和传递cookie

  app.useGlobalInterceptors(new AllResponseInterceptor()); // 拦截格式化处理所有的服务器响应

  app.useGlobalPipes(new ValidationPipe()); // 使用验证插件

  app.use(cookieParser()); // cookie 格式化插件

  app.useGlobalFilters(new AnyExceptionFilter()); // 全局异常处理

  app.useStaticAssets('./public'); // 静态资源目录
  app.setBaseViewsDir('./src/views');
  app.setViewEngine('hbs');

  initDbData(); // 初始化数据

  // 注册代码片段，在hbs模版中可以直接使用
  hbs.registerPartials('./src/views/partials', function (err) {
    if (err) console.log(err);
  });

  await app.listen(3000);

  setTimeout(() => {
    console.log('🌰🌰🌰🌰🌰');
    console.log('服务器启动成功，运行于3000端口');
    console.log('访问地址:  http://localhost:3000');
  }, 1000);
}
bootstrap();

async function initDbData() {
  const prisma = new PrismaService();
  // 添加roles信息
  const roles = ['super_admin', 'admin', 'normal'];

  // 已经存在的角色
  const existRoles = (
    await prisma.role.findMany({
      where: {},
      select: {
        name: true,
      },
    })
  ).map((item) => item.name);
  // 获取超级管理元的角色数据
  const roleSuperAdmin = await prisma.role.findFirst({
    where: {
      name: 'super_admin',
    },
  });
  // 新增默认不存的角色信息
  await Promise.all(
    roles
      .filter((item) => existRoles.indexOf(item) < 0)
      .map((role) =>
        prisma.role.create({
          data: {
            name: role,
          },
        }),
      ),
  );
  // 修复超级管理员数据
  await prisma.employee.upsert({
    where: {
      userName: 'admin',
    },
    update: {
      password: encodePwd('admin'),
      roleId: roleSuperAdmin.id,
    },
    create: {
      userName: 'admin',
      password: encodePwd('admin'),
      roleId: roleSuperAdmin.id,
    },
  });
  // console.log(admin);

  // 请假类型
  const leaveCategories = ['加班', '调休', '年假', '外出'];
  const leaveC = await prisma.leaveCategory.count();
  if (leaveC == 0) {
    await Promise.all(
      leaveCategories.map((item) =>
        prisma.leaveCategory.create({
          data: {
            name: item,
          },
        }),
      ),
    );
  }

  // 文章分类
  const articleCategories = [
    '公告',
    '会议',
    '宣传文案',
    '新闻实际',
    '文件模板',
  ];
  const aC = await prisma.leaveCategory.count();
  if (aC == 0) {
    await Promise.all(
      articleCategories.map((item) =>
        prisma.articleCategory.create({
          data: {
            name: item,
          },
        }),
      ),
    );
  }
  console.log('数据初始化完成');
}
