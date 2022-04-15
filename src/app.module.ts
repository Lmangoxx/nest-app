import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SystemModule } from './system/system.module';
import { MusicModule } from './music/music.module';
import settings from '../settings';

const { mongodb } = settings;

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(mongodb.db),
    SystemModule,
    MusicModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
