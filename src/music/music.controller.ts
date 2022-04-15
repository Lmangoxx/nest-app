import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { ResponsePromise } from 'src/interfaces';
import { CreateMusicDto } from './music.dto';
import { Music } from './music.schema';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get('detail')
  async detail(@Query() query: any) {
    const { id } = query;
    const data = await this.musicService.findById(+id);
    return {
      status: 200,
      data,
      message: '查询成功',
    };
  }

  @Post('create')
  async create(
    @Body() body: CreateMusicDto,
    @Res() res: any,
  ): ResponsePromise<Music> {
    console.log(body);
    const data = await this.musicService.create(body);
    return res.json({
      status: 200,
      data: data,
      message: '创建成功',
    });
  }
}
