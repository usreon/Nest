import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { DmsService } from './dms/dms.service';
import { DmsController } from './dms/dms.controller';
import { ChannelsController } from './channels/channels.controller';
import { ChannelsService } from './channels/channels.service';
import { WorkspacesService } from './workspaces/workspaces.service';
import { WorkspacesController } from './workspaces/workspaces.controller';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, WorkspacesModule], // 모듈을 가져왔으면 연결을 해줘야 된다. 모든 모듈들을 여기서 연결해줘야 함
  controllers: [
    AppController,
    DmsController,
    ChannelsController,
    WorkspacesController,
  ], // route
  providers: [AppService, DmsService, ChannelsService, WorkspacesService],
  // DI
  // 여기서 Nest가 providers에 AppService를 확인하고
  // app.controller.ts로 가서 constructor(private readonly appService: AppService) {} 를 자동으로 넣어준다
  // 그 뒤에 getHello()에서 this.appService.getHello()로 쓸 수 있는 거다.
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // logger.middleware는 consumer에 연결한다.
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
