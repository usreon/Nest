import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  // if it was express ...
  //  @Get()
  //  getUsers(@Req() req) {
  //      return req.user;
  //  }

  @Post()
  postUers(@Body() data: JoinRequestDto) {
    this.userService.postUsers(data.email, data.nickname, data.password); // userService 여기서 안 만들었으니 DI 추가
  }

  @Post('login')
  LogIn(@Req() req) {
    return req;
  }

  @Post('logout')
  LogOut(@Req() req) {
    return req;
  }
}
