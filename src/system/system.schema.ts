import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaDateFactory, DateDocument } from 'src/schema';

export type SystemDocument = System & DateDocument;

@Schema()
export class System extends DateDocument {
  @Prop()
  title: string;

  @Prop()
  username: string;

  @Prop()
  host: string;

  @Prop()
  port: number;
}

export const SystemSchema = SchemaDateFactory.createForClass(System);
