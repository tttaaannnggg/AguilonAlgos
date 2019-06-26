/* 
 * You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * Example 1:
 *
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3 
 * Explanation: 11 = 5 + 5 + 1
 * Example 2:
 *
 * Input: coins = [2], amount = 3
 * Output: -1
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 *
 *  @param {number[]} coins
 *  @param {number} amount
 *  @return {number}
 */

/*
 * Current strategy: cached DFS
 *
 * TODO: improve time complexity by doing modulo operations
 * We can use LCM to do it
 * possibly mutual recursion if the coins have a very big gap between them
 *
 */

const memoize = (func, cache = {})=>{
  return (arg)=>{
    if(!cache[arg]){
      cache[arg] = func(arg);
    }
    return cache[arg];
  }
}

const coinChange = (coins, amt)=>{
  const lowestCoin = Math.min(...coins);

  const traversal = memoize((amt)=>{
    if(amt === 0){
      return 0;
    }
    if(amt < lowestCoin){
      return -1;
    }
    let min = Infinity;

    for (let i = 0; i < coins.length; i++){
      const possibleAns = 1 + traversal(amt-coins[i]);
      if(possibleAns > 0 && possibleAns < min){
        min = possibleAns;
      }
    }
    
    return (min === Infinity)? -1 : min;
  });

  return traversal(amt);
}
