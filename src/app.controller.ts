import {
  Controller,
  HttpCode,
  Redirect,
  Req,
  Query,
  Param,
  Get,
  Post,
  Body,
  Render,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { CreateCatDto } from './dto';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  render() {
    return { message: 'Hello Worldxxxxxxxxx!' };
  }

  @Get('hello')
  @HttpCode(200)
  @Redirect('https://nestjs.com', 301)
  getHello(@Req() request: Request, @Query('version') version: string): object {
    // console.log(request);
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Post('save/:id')
  save(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
    // console.log(createCatDto);
    return `This action adds a new cat #${id}`;
  }
}
