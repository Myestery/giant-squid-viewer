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
import { render } from 'react-dom';
import { Viewer } from '@myestery/giant-squid-viewer';
const coins = ['polkadot']

const App = () => {
  return (
    <Viewer coins={coins} />
  );
};

render(<App />, document.getElementById('root'));
```

## Props

| Prop | Type | Description |
| --- | --- | --- |
| data | object | Giant Squid data |

## Development

```bash
npm install
npm start
```

## License

MIT
The Giant Squid Viewer is licensed under the MIT license. See the LICENSE file for more details.

