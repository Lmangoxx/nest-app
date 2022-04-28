import { Body, Controller, Get, Post, Query } from '@nestjs/common';
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
    return {
      code: 200,
      data: query,
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
