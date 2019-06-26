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
 * sort coins high to low // not necessary with BFS!
 *
 * refactor: How do we kick out as soon as we see a valid sum? // DONE!
 *
 * refactor 2: find LCMs to improve performance
 *
 */

function generatelcms(sortedArr){
  const LCMs = [sortedArr[0]];
  let count = sortedArr[0];
  while (LCMs.length < sortedArr.length){
    count++
    for(let i = 0; i < sortedArr.length; i++){
      if(count%sortedArr[i] !== 0){
        break;
      }else if(!LCMs[i]){
        LCMs.push(count);
      }
    }
  }
  return LCMs
}

const lcmCoin = function(coins, amount){
  coins.sort((a,b)=>a-b);
  let result = -1;
  if (amount < coins[0]){
    return result;
  }
  const lcms = generatelcms(sortedArr);
  lcms.reverse();
  for(let i=0; i<lcms.length; i++){
    const lcm = lcms[i];
  }
}

/*
const coinChange = function(coins, amount) {
  coins.sort((a,b)=>a-b);
  const biggestCoin = coins[coins.length];
  const smallestCoin = coins[0];
  let lowest = Infinity;

  const coinTraverse = function(amount, depth = 0){
    if(depth > lowest || amount < smallestCoin){
      return;
    }
    if(amount === 0){
      lowest = depth;
    }
    if (amount % biggestCoin === 0){
      depth = amount/biggestCoin;
      if(depth < lowest){
        lowest = depth;
        return;
      }
    }else{
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

  }
  coinTraverse(amount);

  if (lowest === Infinity){
    lowest = -1
  }
  return lowest;
};

console.log(generateLCM([1, 5, 10, 25]))
*/

//console.log(coinChange([1,8,5],98));
//console.log(Math.max([1,2,5]));

/*
 * refactor: BFS is breaking in situations where you'll have many coins
 * so let's do DFS
 *
 * we'll LCM our way down to the last bit, then do a cached DFS
 *
 */
const gcd = (a,b)=>{
  if(!a||!b) return 1;
  if (b === 0) return a;
  return gcd(b, a%b);
}

const lcm = (numArr)=>{
  let curProd = 1;
  let output = [];
  for (let i = 0; i < numArr.length; i++){
    curProd *= numArr[i];
    output.push(curProd / gcd(output[i-1],numArr[i]));
  }
  return output;
}

const removeExtras = (coins, amt)=>{ 
  const leastCM= lcm(coins);
  let count = 0;
  for(let i = 0; i < leastCM.length; i++){
    const skip = leastCM.pop();
    count += Math.floor(amt/skip);
    amt = amt % skip;
  }
  return 
}

const memoize = (func, cache = {})=>{
  return (...args)=>{
    const argStr = JSON.stringify(args);
    if(!cache[argStr]){
      cache[argStr] = func(...args);
    }
    return cache[argStr];
  }
}

const dfsCoins = (coins, amt)=>{
  coins.sort((a,b)=>b-a);
  const res = [];
  const traversal = memoize((amt, depth)=>{
    if(amt === 0){
      res.push(depth);
      return depth;
    }
    if(amt < coins[coins.length-1]){
      return -1;
    }
    const depths = [];
    for (let i = 0; i < coins.length; i++){
      depths.push(traversal(amt-coins[i],depth+1));
    }
    if(depths.length){
      return Math.min(...depths);
    }
    return -1;
  });
  traversal(amt, 0);
  const ans = Math.min(...res);
  return (ans === Infinity) ? -1 : ans;
}

console.log(dfsCoins([5, 8, 1],300));
