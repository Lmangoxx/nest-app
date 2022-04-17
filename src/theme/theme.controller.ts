import { Body, Controller, Post, Res } from '@nestjs/common';
import { ThemeService } from './theme.service';

import { CreateThemeDto } from './theme.dto';
import { Theme } from './theme.schema';
import { ResponsePromise } from 'src/interfaces';

@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  @Post('create')
  async create(
    @Body() body: CreateThemeDto,
    @Res() res: any,
  ): ResponsePromise<Theme> {
    const theme = await this.themeService.findById(body.id);
    if (theme) {
      return res.json({
        statusCode: 500,
        data: null,
        message: '该主题已存在',
      });
    }

    const data = await this.themeService.create(body);
    return res.json({
      statusCode: 200,
      data: data,
      message: '创建成功',
    });
  }
}
