import { Injectable } from '@nestjs/common';

import { createOneWallet } from '../utils/ether_utils';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class WalletService {
  // 钱包类的服务
  async getWallet() : Promise<any> {
    return await createOneWallet();
  }
}