import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { System, SystemSchema } from './system.schema';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: System.name,
        schema: SystemSchema,
      },
    ]),
  ],
  controllers: [SystemController],
  providers: [SystemService],
})
export class SystemModule {}
