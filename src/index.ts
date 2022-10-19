// import {
//     ACCOUNT,
//     setup,
//     SK,
//     UMT,
// } from './setup';
// import { exit } from 'process'

// (async () => {

//     const {
//         near,
//         provider
//     } = await setup("testnet", ACCOUNT!, SK!);
  
//   const nfts = await near.nftList(
//     await provider.account("dimabrook-testnet.testnet"),
//     "usernftminter.testnet",
//   );

//   console.log(`Found ${nfts.length} NFTs`);

//   const chosenOne = nfts[0];

//   const pretransfer = await near.preTransfer(await provider.account("dimabrook-testnet.testnet"), chosenOne, new BigNumber(0));

//   console.log(`Pretransfer: ${pretransfer}`);

//   console.log(`Transferring from Near to BSC:`, chosenOne);

//   const response = await factory.transferNft(
//     near,
//     bsc,
//     chosenOne,
//     await provider.account("dimabrook-testnet.testnet"),
//     "0x0d7df42014064a163DfDA404253fa9f6883b9187",
//   );

//   console.log(response);
// })();