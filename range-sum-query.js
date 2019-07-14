
// challenge:
// efficiently precompute all possible range sums
// of an array of integers
//
// a range sum is the sum of all numbers that fall
// within a given range (i,j), inclusive
//

const testVals = [0,1,2,3,4,5];

const Range = function(nums){
  this.cache = [[]];
  let runningSum = 0;
  for (let i = 0; i < nums.length; i++){
    runningSum += nums[i];
    this.cache[0].push(runningSum);
  }
  for (let i = 0; i < nums.length-1; i++){
    const slice = new Array(i+1);
    for (let j = i+1; j < nums.length; j++){
      slice.push(this.cache[0][j] - this.cache[0][i])
    }
    this.cache.push(slice);
  }
}

Range.prototype.sumRange = function(i,j){
  return this.cache[i][j];
}

const test = new Range(testVals);
console.log(test.cache)
console.log(test.sumRange(1,3));
