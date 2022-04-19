import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaDateFactory, DateDocument } from 'src/utils/schema';

export type MusicDocument = Music & DateDocument;

@Schema()
export class Music extends DateDocument {
  @Prop()
  id: number;

  @Prop()
  fid: number;

  // 编码格式等信息
  @Prop()
  codec: string;

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

  @Prop()
  likes: number;

  @Prop()
  collections: number;

  @Prop()
  views: number;
}

export const MusicSchema = SchemaDateFactory.createForClass(Music);
