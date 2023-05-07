import { ApiPromise, WsProvider } from "@polkadot/api";
import { PropsWithChildren, useEffect, useState } from "react";

import { GET_INDEXED_BLOCKS } from "../services/construct-client";
import { GSCoinProps } from "../types/coins";
import React from "react";
import { ethers } from "ethers";
import { useQuery } from "@apollo/client";

export interface Props {
  coin: GSCoinProps;
  /**interval in milliseconds */
  pollInterval: number;
}
export function CoinCard(props: PropsWithChildren<Props>) {
  const [blockNumber, setBlockNumber] = useState(0);
  const [indexPercent, setIndexPercent] = useState(0);
  const {
    loading,
    error,
    data,
  }: {
    loading: boolean;
    error?: any;
    data:
      | {
          squidStatus: {
            height: number;
          };
        }
      | undefined;
  } = useQuery(GET_INDEXED_BLOCKS, {
    pollInterval: props.pollInterval || 1000,
  });
  useEffect(() => {
    if (props.coin.iseth) {
      try {
        const providerRPC = {
          [props.coin.name]: {
            name: props.coin.name,
            rpc: props.coin.ws, // Insert your RPC URL here
            chainId: props.coin.chainId, // 0x504 in hex,
          },
        };
        const provider = new ethers.WebSocketProvider(
          providerRPC[props.coin.name].rpc,
          {
            chainId: providerRPC[props.coin.name].chainId,
            name: providerRPC[props.coin.name].name,
          }
        );
        provider.on("block", (id) => setBlockNumber(id));
      } catch (err) {
        console.error("Error connecting to evm rpc")
     }
    } else {
      const wsProvider = new WsProvider(props.coin.ws);
      (async () => {
        const api = await ApiPromise.create({ provider: wsProvider });
        // const chain = await api.rpc.system.chain();
        await api.rpc.chain.subscribeNewHeads((lastHeader) => {
          setBlockNumber(lastHeader.number.toNumber());
        }).catch((_)=> {
          console.log('disconnected from chain')
        })
        // catch disconnects
        api.on("disconnected", () => {
          setBlockNumber(0);
        })
      })();
    }
  });
  useEffect(() => {
    const height = Number(data?.squidStatus.height);
    if (height > 0) {
      setIndexPercent(Math.floor((height * 100) / blockNumber));
    }
  }, [data, blockNumber]);

  return (
    <div className='border-2 border-white rounded-lg px-2 py-4 shadow-sm hover:shadow-2xl hover:border-[3px]  transition-shadow duration-500 transition-[border-width]'>
      {/* <div className='px-2 grid grid-cols-2'> */}
      <div className='flex px-2 justify-center'>
        <img src={props.coin.logo} className='rounded-xl w-[144px] h-[144px]'  alt={props.coin.name + " logo"} />
        {/* <div></div> */}
      </div>
      <div className='text-xl px-2 py-2 font-medium text-center'>
        <p>{props.coin.name}</p>
      </div>
      <div className=''>
        <div className='px-2'>
          <span className='uppercase text-sm font-bold text-gray-500'>
            <a href={props.coin.ws} target='_blank' rel="noreferrer" >
              RPC STATUS
            </a>
          </span>
          {" :"}
          <span
            className={`${
              blockNumber ? "text-green-400" : "text-yellow-400"
            } mx-2 text-sm lowercase`}>
            {blockNumber ? "Connected" : "Connecting..."}
          </span>
        </div>

        <div className='px-2'>
          <span className='uppercase text-sm font-bold text-gray-500'>
            <a href={props.coin.graphql} target='_blank' rel="noreferrer" >
              GIANT SQUID STATUS
            </a>
          </span>
          {" :"}
          <span
            className={`${
              data?.squidStatus.height ? "text-green-400" : "text-yellow-400"
            } mx-2 text-sm lowercase`}>
            {loading ? "Connecting" : error ? "Error" : "Connected"}
          </span>
        </div>
      </div>
      {data?.squidStatus.height && blockNumber > 0 && (
        <div className='px-2'>
          <p className='text-sm'>
            <span className='text-sm font-bold text-gray-500 uppercase'>
              blocks indexed
            </span>{" "}
            {" : "}
            <span className='text-sm mx-2 text-gray-500'>
              {loading
                ? "Loading..."
                : error
                ? "Error: " + error.message
                : data?.squidStatus.height
                ? indexPercent + "%"
                : "0%"}
            </span>
          </p>
        </div>
      )}
      {data?.squidStatus.height && blockNumber > 0 && (
        <div className='px-2'>
          <p className='text-sm'>
            <span className='text-sm font-bold text-gray-500 uppercase'>
              {" "}
              Blocks
            </span>
            {" : "}
            <span className='text-gray-500'>
              {loading
                ? "Loading..."
                : error
                ? "Error: " + error.message
                : data?.squidStatus.height}
            </span>{" "}
            /{" "}
            <span className='text-sm text-gray-500'>
              {blockNumber || "Loading..."}
            </span>
          </p>
        </div>
      )}
      {data?.squidStatus.height && blockNumber > 0 && (
        <div className='px-2'>
          <p className='text-sm text-gray-500'>
            <span className='text-sm font-bold text-gray-500 uppercase'>
              Remaining Blocks
            </span>
            {" :"}
            <span className='mx-2'>
              {blockNumber - data?.squidStatus.height}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default CoinCard;
