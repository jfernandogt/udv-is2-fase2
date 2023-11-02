const maxProfit = function (prices) {
  let maxP = 0;
  let buying = prices[0];

  for (let i = 1; i < prices.length; i++) {
    let selling = prices[i];

    if (selling < buying) {
      buying = selling;
    }

    maxP = Math.max(maxP, selling - buying);
  }
  return maxP;
};

export default maxProfit;
