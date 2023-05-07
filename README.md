<!-- simple readme for a react library -->
# Giant Squid Viewer

A React component for viewing Giant Squid data.

## Installation

```bash
npm install @myestery/giant-squid-viewer
```

## Usage

```jsx
import React from 'react';
import "@myestery/giant-squid-viewer/styles/index.css";
import { Viewer } from '@myestery/giant-squid-viewer';
const coins = ['polkadot']

const App = () => {
  return (
    <Viewer coins={coins} pollInterval={1000} />
  );
};
```

## Props

| Prop | Type | Description |
| --- | --- | --- |
| coins | array | array of coins to display |
| pollInterval | integer | Frequency of update in milliseconds |

## Coins

Valid coins are:

```bash
["polkadot","kusama","moonbeam","moonriver","acala","karura","statemine","statemint","astar","shiden","shibuya","bifrost","khala","phala","calamari","gm","subsocial","efinity","rococo","interlay","hydraDX"]
```
as seen in [https://docs.subsquid.io/giant-squid-api/statuses/](https://docs.subsquid.io/giant-squid-api/statuses/)

Leave an empty array to see all coins.

## Styles

The viewer uses [tailwindcss](https://tailwindcss.com/) for styling. You will need to import the styles as shown in the description above

## Development

```bash
npm install
npm start
```

## Live Preview
[https://giant-squid-status.netlify.app/](https://giant-squid-status.netlify.app/)

## License

MIT
The Giant Squid Viewer is licensed under the MIT license. See the LICENSE file for more details.

