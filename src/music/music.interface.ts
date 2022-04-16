import { IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetMusicInfoQuery {
  @IsInt()
  @Type(() => Number)
  id: number;

  @IsString()
  title: string;
}
