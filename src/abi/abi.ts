import ABI_ERC20 from './token/erc20.json';
import ABI_ERC721 from './token/erc721.json';

export const abi = {
  token: {
    erc20: ABI_ERC20,
    erc721: ABI_ERC721,
  }
} as const;
