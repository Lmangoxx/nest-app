import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ThemeController } from './theme.controller';
import { Theme, ThemeSchema } from './theme.schema';
import { ThemeService } from './theme.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Theme.name,
        schema: ThemeSchema,
      },
    ]),
  ],
  controllers: [ThemeController],
  providers: [ThemeService],
})
export class ThemeModule {}
