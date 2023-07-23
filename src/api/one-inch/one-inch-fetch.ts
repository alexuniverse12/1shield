import {NetworkName} from '@railgun-community/shared-models';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type APIParams = Record<string, any>;

export enum OneInchApiEndpoint {
  GetSwapQuote = '/quote',
}

export const oneInchApiSubdomain = (networkName: NetworkName): string => {
  switch (networkName) {
    case NetworkName.Ethereum:
      return '1';
    case NetworkName.Polygon:
      return '137';
    case NetworkName.BNBChain:
    case NetworkName.Arbitrum:
    case NetworkName.EthereumGoerli:
    case NetworkName.PolygonMumbai:
    case NetworkName.ArbitrumGoerli:
    case NetworkName.Railgun:
    case NetworkName.Hardhat:
    case NetworkName.EthereumRopsten_DEPRECATED:
      throw new Error(`No 0x API URL for chain ${networkName}`);
  }
};

const oneInchApiUrl = (networkName: NetworkName): string => {
  return `https://api.1inch.io/v5.2/${oneInchApiSubdomain(networkName)}`;
};

const paramString = (params?: APIParams) => {
  if (!params) {
    return '';
  }
  const searchParams = new URLSearchParams(params);
  return searchParams.toString() ? `?${searchParams.toString()}` : '';
};

export const createOneInchUrl = (
  endpoint: OneInchApiEndpoint,
  networkName: NetworkName,
  params?: APIParams,
) => {
  return `${oneInchApiUrl(networkName)}${endpoint}${paramString(params)}`;
};

export const getOneInchData = async <T>(
  endpoint: OneInchApiEndpoint,
  networkName: NetworkName,
  params?: APIParams,
): Promise<T> => {
  const url = createOneInchUrl(endpoint, networkName, params);
  const rsp = await axios.get(url);
  return rsp.data;
};
