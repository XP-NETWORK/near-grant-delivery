import BigNumber from "bignumber.js";
import {
    ACCOUNT,
    setup,
    SK,
    UMT,
} from './setup';
import { exit } from 'process'

(async () => {

    const {
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

    const pretransfer = await near.preTransfer(
        //@ts-ignore
        await provider.account(ACCOUNT), 
        chosenOne, 
        new BigNumber(0)
    );

    console.log(`Pretransfer: ${pretransfer}`);

    exit(0);
})().catch(e => {
    console.error(e);
    exit(1);
});