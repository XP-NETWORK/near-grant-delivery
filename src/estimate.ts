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
        factory,
        near,
        provider
    } = await setup("testnet", ACCOUNT!, SK!);
  
  const nfts = await near.nftList(
      //@ts-ignore
    await provider.account(ACCOUNT),
    UMT,
  );

  console.log(`Found ${nfts.length} NFTs`);

  const chosenOne = nfts[0];

  console.log("Selected:", chosenOne);

const result = await factory.estimateFees(
    near,
    //@ts-ignore
    bsc,
    chosenOne,
    EVM_TO_ACCOUNT
)

  console.log("estimation", result.toString());

  exit(0);
})().catch(e => {
    console.error(e);
    exit(1);
});