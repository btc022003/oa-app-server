import { Controller } from '@nestjs/common';
import { RolesService } from './roles.service';
import { BaseController } from 'src/api/base/base.controller';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('角色管理')
@Controller('/api/v1/roles')
export class RolesController extends BaseController {
  constructor(private readonly rolesService: RolesService) {
    super(rolesService);
  }
}
