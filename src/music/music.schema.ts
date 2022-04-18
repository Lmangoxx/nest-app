import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaDateFactory, DateDocument } from 'src/utils/schema';

export type MusicDocument = Music & DateDocument;

@Schema()
export class Music extends DateDocument {
  @Prop()
  id: number;

  @Prop()
  fid: number;

  @Prop()
  author: string;

  @Prop()
  pic: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  url: string;

  @Prop()
  words: string;
}

export const MusicSchema = SchemaDateFactory.createForClass(Music);
