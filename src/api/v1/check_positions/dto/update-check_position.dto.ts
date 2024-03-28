import { PartialType } from '@nestjs/swagger';
import { CreateCheckPositionDto } from './create-check_position.dto';

export class UpdateCheckPositionDto extends PartialType(CreateCheckPositionDto) {}
