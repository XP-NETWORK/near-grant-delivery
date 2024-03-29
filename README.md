<center>

# NEAR (Layer-1) Grant Delivery Report

</center>

This document outlines the Grant delivery milestones.

## `Milestone 1` — Smart Contract Development - part 1

| Specification |
|-|
| 0. We have researched the NEAR [NFT standards](https://github.com/XP-NETWORK/xp-near-integration/blob/main/xpnft/src/lib.rs) and other factors & [protocols](https://docs.near.org/) that distinguish it from other chains<br/>We have developed the smart contracts that can:<br/>1. [Updating](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L155-L161) validators' group key <br/>2. [Freeze](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L200)/[Unfreeze](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L231) single `Native` NFTs <br/>3. [Mint](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L165)/[Burn](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L181) single `wrapped` NFTs<br/>4. [Withdraw](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L134) the TX fees of the target chain in native tokens|

## `Milestone 2` — Smart Contract Development - part 2

| Specification |
|-|
| We have developed smart contracts that can:<br>5. [Trust the multisig](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L103-L113) of the bridge oracle validators<br/>6. [Whitelist](https://github.com/XP-NETWORK/xp-near-integration/commit/0492f3e7fd7e7f41e3b342dd0410a8db462def97) NFT smart contracts<br/>7. [Pause](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L116)/[Unpause](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L125) for maintenance or if compromised<br/>8. Additional [utilities](https://github.com/XP-NETWORK/xp-near-integration/tree/main/src) |

## `Milestone 3` — Testing & Documenting

| Specification |
|-|
| 1. We will provide both [inline documentation](https://github.com/XP-NETWORK/xp-near-integration/search?q=%2F%2F%2F) of the code and a [basic tutorial](./js_library_tutorial.md) that can interact with the deployed smart contracts and backend service.<br/>2. The code will have proper [tests](https://github.com/XP-NETWORK/xp-near-integration/tree/main/tests) coverage 85% to ensure functionality and robustness. In the guide, we will describe how to run these tests preparing for auditing<br/>3. Add Near to the testnet [nft-indexer](https://github.com/XP-NETWORK/nft-index/tree/nft-index-testnet/src/nft-list/model/near)<br/>4. Add NEAR to the bridge JS Library ([testnet](https://github.com/XP-NETWORK/xpjs/search?q=NEAR))<br/>5. Deploying the [bridge contract](https://explorer.testnet.near.org/accounts/xp_bridge_1.testnet) & [NFT standard contract](https://testnet.nearblocks.io/address/xp_nft_1.testnet#transaction) and testing the contracts in the testnet environment|

## `Milestone 4` — Integrating into the Live Bridge
| Specification |
|-|
| 1. Developed the [validation logic](./Milestone4.md#1-validation-logic) relevant for the NEAR part of the bridge<br/>2. Adding NEAR to the Bridge [NFT-Indexer](./Milestone4.md#2-nft-indexer)<br/>3. Integrating [TX fee estimation](./Milestone4.md#3-fee-estimation)<br/>4. Plugging NEAR in the [heartbeat](./Milestone4.md#4-heartbeat)<br/>5. Integrating with a NEAR [rpc nodes](./Milestone4.md#5-near-rpc-nodes)<br/>6. Integrating NEAR in the [bridge UI](./Milestone4.md#6-near-in-the-bridge-ui)<br/>7. Deployed [smart contracts](./Milestone4.md#7-deployed-smart-contract)<br/>8. Adding NEAR to the bridge [JS library](./Milestone4.md#8-near-in-xpnetwork-javascript-library)<br/>9. Adding access to NEAR from the [REST API](./js_library_tutorial.md)<br/>10. Adding NEAR to the [bridge widget](./Milestone4.md#10-bridge-widget)|

Bonus: Contracts for wrapped NFTs on NEAR support royalties: https://www.mintbase.xyz/contract/s_polychain_bsc.near/token/0x254310d45