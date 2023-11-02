import NodeCache from "node-cache";

let cache;

const getCache = () => {
  if (!cache) {
    console.log('no hay cache')
    cache = new NodeCache();
  }

  return cache;
};

export default getCache;
