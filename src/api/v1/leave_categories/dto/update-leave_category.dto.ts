import { PartialType } from '@nestjs/swagger';
import { CreateLeaveCategoryDto } from './create-leave_category.dto';

export class UpdateLeaveCategoryDto extends PartialType(CreateLeaveCategoryDto) {}
