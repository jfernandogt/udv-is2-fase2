import NodeCache from "node-cache";

let cache;

const getCache = () => {
  if (!cache) {
console.log('no hay cache')
    cache = new NodeCache({
      stdTTL: 24*60*60, // 1 day
      checkperiod: 60*60, // 1 hour
    });
  }

  return cache;
};

export default getCache;
