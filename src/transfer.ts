import BigNumber from "bignumber.js";
import {
    ACCOUNT,
    EVM_TO_ACCOUNT,
    setup,
    SK,
    UMT,
} from './setup';
import { exit } from 'process'

(async () => {

    const {
        bsc,
        near,
        provider,
        factory
    } = await setup("testnet", ACCOUNT!, SK!);

    const nfts = await near.nftList(
        //@ts-ignore
        await provider.account(ACCOUNT),
        UMT,
    );

    console.log(`Found ${nfts.length} NFTs`);

    const chosenOne = nfts[0];

    console.log("Selected:", chosenOne);

      console.log(`Transferring from Near to BSC:`, chosenOne);

  const response = await factory.transferNft(
    near,
    bsc,
    chosenOne,
    //@ts-ignore
    await provider.account(ACCOUNT),
    EVM_TO_ACCOUNT,
  );

  console.log(response);

    exit(0);
})().catch(e => {
    console.error(e);
    exit(1);
});