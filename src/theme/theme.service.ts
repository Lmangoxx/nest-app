import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateThemeDto } from './theme.dto';
import { Theme, ThemeDocument } from './theme.schema';

@Injectable()
export class ThemeService {
  constructor(
    @InjectModel(Theme.name) private themeModel: Model<ThemeDocument>,
  ) {}

  findById(id: number): any {
    return this.themeModel.findOne(
      { id },
      // 过滤掉_id和__v字段
      { _id: 0, __v: 0 },
    );
  }

  async create(createThemeDto: CreateThemeDto): Promise<Theme> {
    const createdTheme = new this.themeModel(createThemeDto);

    return createdTheme.save();
  }
}
