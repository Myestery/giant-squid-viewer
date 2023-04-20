import {
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

import { GSCoinProps } from "../types/coins";
import { NormalizedCacheObject } from "@apollo/client/cache/inmemory/types";

export function constructClient(
  coin: GSCoinProps
): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    uri: coin.graphql,
    cache: new InMemoryCache(),
  });
}

export const GET_INDEXED_BLOCKS = gql`
  query MyQuery {
    squidStatus {
      height
    }
  }
`;
