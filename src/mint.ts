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
    } = await setup('testnet', ACCOUNT!, SK!);

    const newNFT = {
        contract: UMT!,
        metadata: {
            title: "Uniair",
            description:
                "One with the calm, the Uniair is a species that enjoys the tranquillity of elevation. A true underdog, the Uniair gives an endearing presence with every move.",
            extra: "https://meta.polkamon.com/meta?id=10001852306",
            media: "https://assets.polkamon.com/images/Unimons_T06C02H10B04G00.jpg",
            expires_at: null,
            issued_at: null,
            mediaHash: null,
            reference: null,
            referenceHash: null,
            starts_at: null,
            updated_at: null,
        },
        token_id: `NFT#{${Math.ceil(Math.random() * 10000000)}}`,
        token_owner_id: ACCOUNT,
    }

    const [receipt, result] = await near.mintNft(
        //@ts-ignore
        await provider.account(ACCOUNT),
        newNFT
    );
    console.log(receipt, result);
    exit(0);
})().catch(e => {
    console.error(e);
    exit(1)
})