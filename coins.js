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
 * strategy: BFS tree traversal while counting depth
 *
 * sort coins high to low
 *
 * refactor: How do we kick out as soon as we see a valid sum?
 *
 */

const coinChange = function(coins, amount) {
  coins.sort( (a,b)=> b-a );
  let lowest = Infinity;

  const coinTraverse = function(amount, depth = 0){
    if(amount === 0 && depth < lowest){
      lowest = depth;
    }
    const bfs = [];
    for (let i = 0; i < coins.length; i++){
      const newAmt = amount - coins[i];
      if (newAmt >=0){
        bfs.push(newAmt);
      }
    }
    for(let i = 0; i < bfs.length; i++){
      coinTraverse(bfs[i], depth + 1);
    }
  }
  coinTraverse(amount);

  if (lowest === Infinity){
    lowest = -1
  }
  return lowest;
};

console.log(coinChange([5,4,1],8))

