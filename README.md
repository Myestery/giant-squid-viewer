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
| coins | array | array of coins to display |

## Styles

The viewer uses [tailwindcss](https://tailwindcss.com/) for styling. You can override the default styles by including your own tailwind config file in your project.

If you do not use tailwind, the extracted styles can be found in `styles/index.css`.

### Link
 
[https://raw.githubusercontent.com/Myestery/giant-squid-viewer/main/styles/index.css](https://raw.githubusercontent.com/Myestery/giant-squid-viewer/main/styles/index.css)


## Development

```bash
npm install
npm start
```

## License

MIT
The Giant Squid Viewer is licensed under the MIT license. See the LICENSE file for more details.

