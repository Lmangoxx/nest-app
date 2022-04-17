import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class CreateThemeDto {
  @IsInt()
  @Type(() => Number)
  id: number;

  @IsString()
  label: string;
}
