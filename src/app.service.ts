import { Injectable } from '@nestjs/common';

// 서비스는 요청, 응답에 대해서 모른다.
@Injectable()
export class AppService {
  getHello(): string {
    return process.env.SECRET;
  }
}
