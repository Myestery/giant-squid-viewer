import '../../styles/index.css'

import { GSCoin, GSCoinsMap } from "../types/coins";

import { ApolloProvider } from "@apollo/client";
import { CoinCard } from "../components/coincard";
import { PropsWithChildren } from "react";
import React from "react";
import { constructClient } from "../services/construct-client";

export interface Props {
  coins: GSCoin[];
}
function Viewer(props: PropsWithChildren<Props>) {
  const coins =
    props.coins.length == 0
      ? (Object.keys(GSCoinsMap).filter((x) => x !== "gm") as GSCoin[])
      : (props.coins as GSCoin[]);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {coins.map((coin) => (
        <React.Fragment key={coin}>
          <Item coin={coin} />
        </React.Fragment>
      ))}
    </div>
  );
}
export const Item = React.memo(function Item2(props: { coin: GSCoin }) {
  return (
    <ApolloProvider client={constructClient(GSCoinsMap[props.coin])}>
      <CoinCard coin={GSCoinsMap[props.coin]} />
    </ApolloProvider>
  );
});
export default Viewer;
