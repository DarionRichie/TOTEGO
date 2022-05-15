import { Controller, Get, Query, Req } from '@nestjs/common';
import { WalletService } from './wallet.service';

import { Request } from '@nestjs/common';


@Controller("wallet")
export class WalletController {
  constructor(private readonly walletService: WalletService) { }

  @Get("get_one")
  async getWallet(): Promise<string> {
    let createWallet: any = await this.walletService.getWallet();
    return JSON.stringify(createWallet);
  }

  @Get("get_address_by_pri")
  getAddressByPri(@Query("pri") pri : string): string {
    return this.walletService.getAddreeByPri(pri);
  }
}
