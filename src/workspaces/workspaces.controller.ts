import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {
    console.log('에러 방지 코드');
  }

  @Post()
  createWorkspace() {
    console.log('에러 방지 코드');
  }

  @Get(':url/members')
  getAllMembersFromWorkspace() {
    // 변수명은 웬만하면 길고 정확하게 짓자
  }

  @Post(':url/members')
  inviteMembersToWorkspace() {
    console.log('에러 방지 코드');
  }

  @Delete(':url/members/:id')
  kickMembersFromWorkspace() {
    console.log('에러 방지 코드');
  }

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {
    console.log('에러 방지 코드');
  }
}
