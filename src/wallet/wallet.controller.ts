import { Controller, Get, Query, Req } from '@nestjs/common';
import { WalletService } from './wallet.service';

import { Request } from '@nestjs/common';

import { write_to_file } from '../../utils/file_operation'

@Controller("wallet")
export class WalletController {
  constructor(private readonly walletService: WalletService) { }

  @Get("get_one")
  async getWallet(): Promise<string> {
    let createWallet: any = await this.walletService.getWallet();
    // not care the return value
    write_to_file(createWallet.address, './test.keystore');
    return JSON.stringify(createWallet);
  }

  @Get("get_address_by_pri")
  getAddressByPri(@Query("pri") pri : string): string {
    return this.walletService.getAddreeByPri(pri);
  }
}
