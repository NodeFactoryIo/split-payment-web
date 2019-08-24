export const IPFS_URL = 'https://ipfs.infura.io/ipfs';

export const getAssetURL = (hash) => {
  return IPFS_URL + `/${hash}`;
};
