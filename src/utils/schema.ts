import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class DateDocument extends Document {
  @Prop({ default: Date.now })
  createAt: number;

  @Prop({ default: Date.now })
  updateAt: number;
}

export class SchemaDateFactory extends SchemaFactory {
  static createForClass(cls) {
    const schema = super.createForClass(cls);
    schema.pre('save', function (next) {
      if (this.isNew) {
        this.createAt = this.updateAt = Date.now();
      } else {
        //不是新数据，只更新updateAt时间
        this.updateAt = Date.now();
      }
      next();
    });
    return schema;
  }
}
