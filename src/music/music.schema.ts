import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaDateFactory, DateDocument } from 'src/schema';

export type MusicDocument = Music & DateDocument;

@Schema()
export class Music extends DateDocument {
  @Prop()
  id: number;

  @Prop()
  author: string;

  @Prop()
  pic: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  url: string;
}

export const MusicSchema = SchemaDateFactory.createForClass(Music);