import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSystemDto } from './system.dto';
import { System, SystemDocument } from './system.schema';

@Injectable()
export class SystemService {
  constructor(
    @InjectModel(System.name) private systemModel: Model<SystemDocument>,
  ) {}

  async findAll(): Promise<System[]> {
    return this.systemModel.find().exec();
  }

  async create(createSystemDto: CreateSystemDto): Promise<System> {
    const createdSystem = new this.systemModel(createSystemDto);

    return createdSystem.save();
  }
}
