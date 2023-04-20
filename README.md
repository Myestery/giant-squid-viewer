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
import { GiantSquidViewer } from 'giant-squid-viewer';

const App = () => {
  return (
    <GiantSquidViewer
      data={data}
      width={800}
      height={600}
      onHover={console.log}
      onClick={console.log}
    />
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

