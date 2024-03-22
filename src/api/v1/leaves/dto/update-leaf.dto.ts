import { PartialType } from '@nestjs/swagger';
import { CreateLeafDto } from './create-leaf.dto';

export class UpdateLeafDto extends PartialType(CreateLeafDto) {}
