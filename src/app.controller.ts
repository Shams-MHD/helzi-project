import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
    ser mazane
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