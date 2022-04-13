export const getCid = (cidOrPrefixedUrl: string): string => {
  return cidOrPrefixedUrl.replace('ipfs://', '');
};

export const addIpfsPrefix = (cid: string): string => {
  return 'ipfs://' + cid;
};

export const getCidGatewayUrl = (ipfsUri: string): string => {
  return `https://ipfs.io/ipfs/${getCid(ipfsUri)}`;
};

export const getRandomEarthCloudfrontUrl = (ipfsUri: string): string => {
  return `https://d75aawrtvbfp1.cloudfront.net/${encodeURI(ipfsUri)}`;
};
