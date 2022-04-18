import { Type } from 'class-transformer';
import { IsArray, IsInt, IsString } from 'class-validator';

export class CreateMusicDto {
  @IsInt()
  @Type(() => Number)
  id: number;

  @IsString()
  author: string;

  @IsString()
  pic: string;

  @IsString()
  title: string;

  @IsString()
  url: string;

  @IsString()
  words: string;
}
