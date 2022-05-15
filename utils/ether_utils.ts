import { ethers } from "ethers";

export function createOneWallet() {
  let randomWallet : any = ethers.Wallet.createRandom();
  console.log(randomWallet.address);
  console.log(randomWallet.privateKey);
  return randomWallet;
}


export function getAddressByPro(pri : string) {
  let wallet = new ethers.Wallet(pri);
  return wallet.address;
}