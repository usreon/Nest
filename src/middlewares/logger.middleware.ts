import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  // logger 미들웨어 만들기
  // -> app.module 에서 연결
  // 이 미들웨어 자체는 라우터보다 먼저 실행돼서 리퀘스트 값들을 기록하고
  // morgan은 라우터 끝나고 로깅해줌

  private logger = new Logger('HTTP'); // logger로 컨텍스트를 지정해주면 HTTP 관련된 요청들은

  use(req: Request, res: Response, next: NextFunction): void {
    // 1. 라우터 시작할 때 변수 값들 먼저 기록
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';

    // 3. 마지막으로 실행
    // 라우터 끝날 때 (finish) 실행된다.
    res.on('finish', () => {
      const { statusCode } = res;
      const contentLength = res.get('content-length');
      this.logger.log(
        // Nest에서는 console.log 대신 Logger.log나 this.logger.log 사용
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip} `,
      );
    });

    // 2. 두번째로 실행
    next(); // 미들웨어는 항상 next를 써줘야 작동
  }
}

// Nest는 controller 전에 항상 module을 만든다.
