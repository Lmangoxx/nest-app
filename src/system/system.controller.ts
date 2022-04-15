import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateSystemDto } from './system.dto';
import { ListQuery } from './system.interface';
import { SystemService } from './system.service';

@Controller('system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Get('allList')
  async getAllList() {
    return this.systemService.findAll();
  }

  @Get('list')
  getList(@Query() query: ListQuery) {
    const { title = '', page = 1, pageSize = 10 } = query;
    return {
      code: 200,
      data: 'ok111',
    };
  }

  @Post('edit')
  edit(@Body() body: CreateSystemDto) {
    console.log(body);
    if (!body.id) {
      return this.systemService.create(body);
    }
  }
}
