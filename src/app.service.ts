import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      status: 200,
      data: {
        name: '张三',
      },
    };
  }
}
