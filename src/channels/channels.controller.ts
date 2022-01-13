import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {
    console.log('에러 방지 코드');
  }

  @Post()
  createChannel() {
    console.log('에러 방지 코드');
  }

  @Get(':name')
  getSpecificChanner() {
    console.log('에러 방지 코드');
  }

  @Get(':name/chats')
  getChats(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @Post(':name/chats')
  postChat(@Body() body) {
    console.log(body, '에러 방지 코드');
  }

  @Get(':name/members')
  getAllMembers() {
    console.log('에러 방지 코드');
  }

  @Post(':name/members')
  inviteMembers() {
    console.log('에러 방지 코드');
  }
}
