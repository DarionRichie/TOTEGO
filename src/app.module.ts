import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, WalletService } from './app.service';

import { WalletModule } from "./wallet/wallet.module"

@Module({
  imports: [WalletModule],
  controllers: [AppController],
  providers: [AppService, WalletService],
})
export class AppModule {}
