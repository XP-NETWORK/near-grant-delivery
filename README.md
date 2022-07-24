<center>

# NEAR (Layer-1) Grant Delivery Report

</center>

This document outlines the Grant delivery milestones.

## `Milestone 1` — Smart Contract Development - part 1

| Specification |
|-|
| 0. We have researched the NEAR [NFT standards](https://github.com/XP-NETWORK/xp-near-integration/blob/main/xpnft/src/lib.rs) and other factors & [protocols](https://docs.near.org/) that distinguish it from other chains<br/>We have developed the smart contracts that can:<br/>1. [Updating](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L155-L161) validators' group key <br/>2. [Freeze](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L200)/[Unfreeze](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L231) single `Native` NFTs <br/>3. [Mint](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L165)/[Burn](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L181) single `wrapped` NFTs<br/>4. [Withdraw](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L134) the TX fees of the target chain in native tokens|

# TODO:

## `Milestone 2` — Smart Contract Development - part 2

| Specification |
|-|
| We will develop smart contracts that will:<br>5. [Trust the multisig](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L103-L113) of the bridge oracle validators<br/>6. Whitelist NFT smart contracts<br/>7. [Pause](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L116)/[Unpause](https://github.com/XP-NETWORK/xp-near-integration/blob/103a3557e28300138f5e6d6c7af49ac6ae921049/bridge/src/lib.rs#L125) for maintenance or if compromised<br/>8. Additional features |

## `Milestone 3` — Testing & Documenting

| Specification |
|-|
| 1. We will provide both inline documentation of the code and a basic tutorial that can interact with the deployed smart contracts and backend service.<br/>2. The code will have proper unit-test coverage 85% to ensure functionality and robustness. In the guide, we will describe how to run these tests preparing for auditing<br/>3. Deploying and testing the contracts in the testnet environment|

## `Milestone 4` — Integrating into the Live Bridge
| Specification |
|-|
| 1. Developing validation logic relevant for the NEAR part of the bridge<br/>2. Adding NEAR to the Bridge NFT-Indexer<br/>3. Integrating TX fee estimation<br/>4. Plugging NEAR in the heartbeat<br/>5. Integrating with a NEAR rpc node<br/>6. Integrating NEAR in the bridge UI<br/>7. Deploying smart contracts<br/>8. Adding NEAR to the bridge JS library<br/>9. Adding access to NEAR from the REST API<br/>10. Adding NEAR to the bridge widget|