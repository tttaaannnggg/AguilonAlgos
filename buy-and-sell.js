/*
 * we've got a list of stock prices over the course of some interval
 * how do we figure out what the maximum possible profit over the course of a day is?
 * this can be done in O(n) time
 */

const maxProfit = (prices)=>{
let profit = 0
let lowestVal = prices[0];
for (let i = 0; i < prices.length; i++){
    const newProfit = prices[i]-lowestVal;
    if(newProfit > profit){
      profit = newProfit
    }
      if (prices[i]<lowestVal){
      lowestVal = prices[i];
    }
  }
  return profit
}

