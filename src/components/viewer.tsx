import { GSCoin, GSCoinsMap } from "../types/coins";

import { ApolloProvider } from "@apollo/client";
import { CoinCard } from "../components/coincard";
import { PropsWithChildren } from "react";
import React from "react";
import { constructClient } from "../services/construct-client";

export interface Props {
  coins: GSCoin[];
  /**interval in milliseconds */
  pollInterval: number;
}
function Viewer(props: PropsWithChildren<Props>) {
  const coins =
    props.coins.length == 0
      ? (Object.keys(GSCoinsMap) as GSCoin[])
      : (props.coins as GSCoin[]);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      {coins.map((coin) => (
        <React.Fragment key={coin}>
          <Item coin={coin} pollInterval={props.pollInterval} />
        </React.Fragment>
      ))}
    </div>
  );
}
export const Item = React.memo(function Item2(props: {
  coin: GSCoin;
  pollInterval: number;
}) {
  return (
    <ApolloProvider client={constructClient(GSCoinsMap[props.coin])}>
      <CoinCard
        coin={GSCoinsMap[props.coin]}
        pollInterval={props.pollInterval}
      />
    </ApolloProvider>
  );
});
export default Viewer;
