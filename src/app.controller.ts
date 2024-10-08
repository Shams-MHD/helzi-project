import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('waseem')
  waseem(): string {
    return this.appService.getHello();
  }

  @Post()
  getHello(): string {
    return this.appService.getHello();
  }
}
//lkjhgfghjkl;kjbjnzn
lkjhgffghjk
;lkjhj
hi

ser mazane

helzi
ser mazane