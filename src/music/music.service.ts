import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMusicDto } from './music.dto';
import { Music, MusicDocument } from './music.schema';

@Injectable()
export class MusicService {
  constructor(
    @InjectModel(Music.name) private readonly musicModel: Model<MusicDocument>,
  ) {}

  findById(id: number): any {
    return this.musicModel.findOne({ id });
  }

  async create(createMusicDto: CreateMusicDto): Promise<Music> {
    const createdMusic = new this.musicModel(createMusicDto);

    return createdMusic.save();
  }
}
