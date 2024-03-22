import { PartialType } from '@nestjs/swagger';
import { CreateLeaveDto } from './create-leaf.dto';

export class UpdateLeafDto extends PartialType(CreateLeaveDto) {}
