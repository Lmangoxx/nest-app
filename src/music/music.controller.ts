import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { ResponsePromise } from 'src/interfaces';
import { CreateMusicDto } from './music.dto';
import { GetMusicInfoQuery } from './music.interface';
import { Music } from './music.schema';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Get('detail')
  async detail(
    @Query() query: GetMusicInfoQuery,
    @Res() res: any,
  ): ResponsePromise<any> {
    console.log('detail-----', typeof query.id);
    const data = await this.musicService.findById(query);
    return res.json({
      status: 200,
      data,
      message: '查询成功',
    });
  }

  @Post('create')
  async create(
    @Body() body: CreateMusicDto,
    @Res() res: any,
  ): ResponsePromise<Music> {
    console.log(body);
    const music = await this.musicService.findById({
      id: body.id,
      title: body.title,
    });
    if (music) {
      return res.json({
        status: 500,
        data: null,
        message: '该音乐已存在',
      });
    }

    const data = await this.musicService.create(body);
    return res.json({
      status: 200,
      data: data,
      message: '创建成功',
    });
  }
}
