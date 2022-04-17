import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      statusCode: 200,
      data: {
        name: '张三',
      },
    };
  }
}
