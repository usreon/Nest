import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller() decorator allows us to easily group a set of related routes, and minimize repetitive code.
// For example, we may choose to group a set of routes that manage interactions with a customer entity under the route /customers.
// In that case, we could specify the path prefix customers in the @Controller() decorator so that we don't have to repeat that portion of the path for each route in the file.

@Controller('abc') // 함수들의 공통적인 라우트 (optional route path prefix of `abc`)
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 괄호 안에 들어가는 게 세부 주소
  @Get('hello') // GET/abc/hello : HTTP메소드/공통주소/세부주소
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('hi') // POST/abc/hi : HTTP메소드/공통주소/세부주소
  postHello(): string {
    return this.appService.postHello();
  }
}

// Get('hello')를 Controller('abc')에 연결하는 코드를 작성하지 않았는데
// 어떻게 자동으로 연결되는 걸까?
// -> Nest 데코레이터(에노테이션)가 자동으로 해준다
