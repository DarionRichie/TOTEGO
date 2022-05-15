import { Injectable } from '@nestjs/common';

import { createOneWallet, getAddressByPro} from '../../utils/ether_utils';

@Injectable()
export class WalletService {
  // 创建新钱包
  async getWallet() : Promise<any> {
    return await createOneWallet();
  }

  // 使用私钥获取钱包地址
  getAddreeByPri(pri : string) : string {
    return getAddressByPro(pri);
  }
}