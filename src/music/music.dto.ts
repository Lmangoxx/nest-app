import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class CreateMusicDto {
  @IsInt()
  @Type(() => Number)
  id: number;

  @IsInt()
  @Type(() => Number)
  fid: number;

  @IsString()
  codec: string;

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

  @IsInt()
  @Type(() => Number)
  likes: number;

  @IsInt()
  @Type(() => Number)
  collections: number;

  @IsInt()
  @Type(() => Number)
  views: number;
}
