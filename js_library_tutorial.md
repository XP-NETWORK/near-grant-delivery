# Tutorial of NEAR contracts interaction using xp.network JS library

## 0.Minting

Minting may be required before testing the bridge in the testnet in the absense of marketplaces where third party NFTs can be bought.

To mint an NFT inside this project run in the terminal
```bash
yarn mint
```
The code snippet: `./src/mint.ts`

Minting Transaction Link: https://explorer.testnet.near.org/transactions/ApiwV2tFHVm4dku5LA4QSSpbH81wdvzQozminSRcpkgp

## 1.Listing NFTs

NFT-Indexing is a convenience tool allowing a user to select an NFT she wants to transfer.

To get an array of NFTs owned by an account on NEAR run in the terminal:
```
yarn listing
```

The code snippet: `./src/listing.ts`

Example output:
```
$ tsc && node ./dist/listing.js
Found 1 NFTs
Selected: {
  native: { tokenId: 'NFT#{7905109}', contract: 'usernftminter.testnet' },
  collectionIdent: 'usernftminter.testnet',
  uri: 'https://meta.polkamon.com/meta?id=10001852306'
}
✨  Done in 8.39s.
```

On-Chain transaction: https://explorer.testnet.near.org/transactions/7FCB6TjcbPXyriF1S9ek6dzGqw1o83ZqArKs6fjncD3o

## 2. Approving

To Approve run in the terminal:
```bash
yarn approve
```

The code snippet: `./src/approve.ts`

Example output:
```bash
$ tsc && node ./dist/approve.js
Found 1 NFTs
Selected: {
  native: { tokenId: 'NFT#{7905109}', contract: 'usernftminter.testnet' },
  collectionIdent: 'usernftminter.testnet',
  uri: 'https://meta.polkamon.com/meta?id=10001852306'
}
Retrying transaction usernftminter.testnet:3vdpxzKaYQDb4QJLdDSWu6n1szAEeLA6h7Hs8zAtLREn with new nonce.
Receipt: pd1MmN6VpWc6uPo3D7T7tn9zWCVrdLzDCChPHArWSEm
        Failure [usernftminter.testnet]: Error: Contract method is not found
Pretransfer: E1xeqHtoYqVekFhrJM7sLTV5ezH2F7zZJ7fKiQC7f2vF
✨  Done in 41.62s.
```
Transaction on-chain: https://explorer.testnet.near.org/transactions/E1xeqHtoYqVekFhrJM7sLTV5ezH2F7zZJ7fKiQC7f2vF

## 3. Transferring

To transfer an approved NFT run in the terminal:

```
yarn transfer
```

Code snippet: `./src/transfer.ts`

Example output:
```bash
$ tsc && node ./dist/transfer.js
Found 1 NFTs
Selected: {
  native: { tokenId: 'NFT#{7905109}', contract: 'usernftminter.testnet' },
  collectionIdent: 'usernftminter.testnet',
  uri: 'https://meta.polkamon.com/meta?id=10001852306'
}
Transferring from Near to BSC: {
  native: { tokenId: 'NFT#{7905109}', contract: 'usernftminter.testnet' },
  collectionIdent: 'usernftminter.testnet',
  uri: 'https://meta.polkamon.com/meta?id=10001852306'
}
48506498
Minting With : 0x783eF7485DCF27a3Cf59F5A0A406eEe3f9b2AaeB
Receipt: CAkQ2vZ2Byi8UsNu8uxm5fkxo8wXE7Srkmi8Jk4bBkud
        Log [xp_bridge_1.testnet]: EVENT_JSON:{"standard":"nep171","version":"1.0.0","event":"nft_transfer","data":[{"old_owner_id":"dimabrook-testnet.testnet","new_owner_id":"xp_bridge_1.testnet","token_ids":["NFT#{7905109}"]}]}
Receipts: 8EvMjNGSx9EWCWrPv9e1tFi9paeVJzrB8hD9myKxFg3G, FYvpG9EjUdcGMwUC2jmoGaAXEwunWnqy1TVLcuMXMGvm
        Log [xp_bridge_1.testnet]: EVENT_JSON:{"event_type":"TransferUnique","event":{"chain_nonce":4,"to":"0x0d7df42014064a163DfDA404253fa9f6883b9187","mint_with":"0x783eF7485DCF27a3Cf59F5A0A406eEe3f9b2AaeB","action_id":8,"amt":48506498,"token_id":"NFT#{7905109}","contract":"usernftminter.testnet"}}
[
  {
    receipts_outcome: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    status: { SuccessValue: '' },
    transaction: {
      actions: [Array],
      hash: '6KY3Exi4RPMtLGxkASrhLhs121y75uLikPT4WME3v2Zn',
      nonce: 99195778000076,
      public_key: 'ed25519:3eTbynMswPLQrhLoBmA9TRXgMEsQaXueu26jUv533kqV',
      receiver_id: 'xp_bridge_1.testnet',
      signature: 'ed25519:5odeV3dkF9dtrdmccvZg2kDxXiN6ZHSnsWcWmrjva7YYAYnFPihbsy9hwF612jTHqzs7aRVqwFm3NpqMaJDv2YE4',
      signer_id: 'dimabrook-testnet.testnet'
    },
    transaction_outcome: {
      block_hash: '7KoTXtuHExZ7C17y3AzjePucxkFwjLHrDWfbU7tNywnV',
      id: '6KY3Exi4RPMtLGxkASrhLhs121y75uLikPT4WME3v2Zn',
      outcome: [Object],
      proof: [Array]
    }
  },
  ''
]
✨  Done in 22.04s.
```

On-Chain transaction: https://explorer.testnet.near.org/transactions/6KY3Exi4RPMtLGxkASrhLhs121y75uLikPT4WME3v2Zn

