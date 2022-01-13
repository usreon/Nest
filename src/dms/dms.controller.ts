import { Controller, Get, Param, Query, Body, Post } from '@nestjs/common';

@Controller('api/workspace/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChat(@Query() query, @Param() param) {
    //getChat(@Param('id') id) 구조분해 할당으로 받아온 값으로 query.id로 값을 찾지 않아도 됨
    console.log(query.perPage, query.page);
    console.log(param.id);
  }

  @Post(':id/chats')
  postChat(@Body() body) {
    console.log(body);
  }
}
