
const maxSubArray = (nums)=>{
  const data = [nums[0]];
  const results = {
    sum: nums[0],
    range: [0, 0]
  }
  for (let i = 1; i < nums.length; i++){
    const runningSum = data[i-1] + nums[i];
    if (runningSum > results.sum){
      results.sum = runningSum;
      results.range[1] = i;
    }
    data.push(data[i-1] + nums[i]);
  }
  for (let i = 0; i < results.range[1]; i++){
    const tempSum = data[results.range[1]] - data[i];
    if(tempSum > results.sum){
      results.range[0] = i;
      results.sum = tempSum;
    }
  }
  return results.sum;
}

const test = [-2,1,-3,4,-1,2,1,-5,4];
const test2 = [-2,1]
const test3 = [-2,-1]

console.log(maxSubArray(test));
console.log(maxSubArray(test2));
console.log(maxSubArray(test3));
