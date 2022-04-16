import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMusicDto } from './music.dto';
import { GetMusicInfoQuery } from './music.interface';
import { Music, MusicDocument } from './music.schema';

@Injectable()
export class MusicService {
  constructor(
    @InjectModel(Music.name) private readonly musicModel: Model<MusicDocument>,
  ) {}

  findById({ id, title }: GetMusicInfoQuery): any {
    return this.musicModel.findOne(
      {
        $or: [{ id }, { title }],
      },
      // 过滤掉_id和__v字段
      { _id: 0, __v: 0 },
    );
  }

  async create(createMusicDto: CreateMusicDto): Promise<Music> {
    const createdMusic = new this.musicModel(createMusicDto);

    return createdMusic.save();
  }
}
