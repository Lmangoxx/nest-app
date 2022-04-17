import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ThemeDocument = Theme & Document;

@Schema()
export class Theme extends Document {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  label: string;
}

export const ThemeSchema = SchemaFactory.createForClass(Theme);
