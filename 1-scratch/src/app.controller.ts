import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/home')
  getHello(): string {
    return 'Hello World!';
  }

  @Get('/about')
  getAbout(): string {
    return 'About Page';
  }
}
