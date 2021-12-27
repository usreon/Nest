import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { TestAppService } from './app.service';

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
    // 여기서 new AppService().getHello();로 써도 무방하다.
    // 하지만 그렇게 하지 않는 이유는 코드의 재사용성과 활용성을 위해서고,
    // 만약 new ~로 작성했다면
    // function a(b,c) {
    // return b + c;
    // }
    // 에서 b + c가 아닌 5 + c로 고정된 값을 받는 것과 같다.
    // 즉, this.appService... DI는 매개변수와 같은 역할을 해준다.
  }

  // DI를 통해서 인자가 고정되지 않고 매개변수를 활용하여 결합성을 낮춘다.
  // new AppController(new AppService()); -> 실제 환경
  // new AppController(new TestAppService()); -> 테스트 환경/ 이런 식으로 테스트 할 때 유용하다. (3번째 줄 주석 참고)

  // 정리 : 또한 객체를 내부에서 만들어서 부모 객체에 의존하기 때문에 결합성이 강해져 단일 책임분리에 어긋난다.
  // 따라서 DI를 활용해 객체를 밖에서 만들어 넘겨줌으로써 결합성을 낮춰줄 수 있다.

  // @Post('hi') POST/abc/hi : HTTP메소드/공통주소/세부주소
  // postHello(): string {
  //   return this.appService.postHello();
  // }
}

// Get('hello')를 Controller('abc')에 연결하는 코드를 작성하지 않았는데
// 어떻게 자동으로 연결되는 걸까?
// -> Nest 데코레이터(에노테이션)가 자동으로 해준다
