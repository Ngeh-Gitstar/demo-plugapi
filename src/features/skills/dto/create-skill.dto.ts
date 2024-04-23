import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSkillDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  label: string;
}
