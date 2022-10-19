import { connect, InMemorySigner, KeyPair, keyStores } from "near-api-js";

import {
    AppConfigs,
    Chain,
    ChainFactory,
    ChainFactoryConfigs,
    TestNetRpcUri,
} from "xp.network";

import {exit, env} from 'process'

import {config} from 'dotenv'; config();

export type Network = "testnet" | "mainnet";

export const {ACCOUNT, EVM_TO_ACCOUNT, SK, UMT} = env;

export const setup = async (network: Network, account: string, SK:string) => {

    let factory;
    switch (network) {
        case "mainnet":
            factory = ChainFactory(
                AppConfigs.MainNet(),
                await ChainFactoryConfigs.MainNet()
            );
            break;
        case "testnet":
            factory = ChainFactory(
                AppConfigs.TestNet(),
                await ChainFactoryConfigs.TestNet()
            );
            break;
        default:
            throw Error(`The network must be either "testnet" | "mainnet", while ${network} was provided`)
    }

    const bsc = await factory.inner(Chain.BSC);
    const near = await factory.inner(Chain.NEAR);

    const keyStore = new keyStores.InMemoryKeyStore();
    const keyPair = KeyPair.fromString(`ed25519:${SK}`);

    keyStore.setKey(network, account, keyPair);

    const signer = new InMemorySigner(keyStore);

    const provider = await connect({
        headers: {},
        nodeUrl: TestNetRpcUri.NEAR,
        networkId: network,
        signer,
    });

    return {
        bsc,
        factory,
        keyStore,
        keyPair,
        near,
        signer,
        provider
    }

}
