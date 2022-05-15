import { Controller, Get, Req } from '@nestjs/common';
import { AppService , WalletService} from './app.service';

import { Request } from '@nestjs/common';

import { createOneWallet } from '../utils/ether_utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly walletService : WalletService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("kingxinwang")
  async sayHello(): Promise<string> {
    let createWallet : any = await this.walletService.getWallet();
    return JSON.stringify(createWallet);
  }

  @Get("testReq")
  getReq(@Req() request : Request) : string {
    console.log(request.body);
    return "this is a test !!";
  }
}
