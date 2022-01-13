import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController], // user service 생성 후 module의 provider에 연결이 됨
})
export class UsersModule {}
