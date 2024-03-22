import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonController } from './api/v1/common/common.controller';
import { ValidateLoginMiddleware } from './validate-login/validate-login.middleware';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './api/v1/auth/auth.module';
import { CommonService } from './api/v1/common/common.service';
import { EmployeesModule } from './api/v1/employees/employees.module';
import { AttendancesModule } from './api/v1/attendances/attendances.module';
import { LeavesModule } from './api/v1/leaves/leaves.module';
import { LeaveCategoriesModule } from './api/v1/leave_categories/leave_categories.module';

@Module({
  imports: [
    AuthModule,
    EmployeesModule,
    LeaveCategoriesModule,
    LeavesModule,
    AttendancesModule,
  ],
  controllers: [AppController, CommonController],
  providers: [AppService, PrismaService, CommonService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateLoginMiddleware)
      .exclude(
        { path: '/api/v1/auth/login', method: RequestMethod.ALL },
        { path: '/api/v1/auth/logout', method: RequestMethod.ALL },
      )
      .forRoutes(...['/api/v1/*']); // 使用中间件
  }
}
