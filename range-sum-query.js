
// challenge:
// efficiently precompute all possible range sums
// of an array of integers
//
// a range sum is the sum of all numbers that fall
// within a given range (i,j), inclusive
//


const Range = function(nums){
  this.cache = [0];
  for (let i = 0; i < nums.length; i++){
    this.cache.push(this.cache[i]+nums[i]);
  }
}

Range.prototype.sumRange = function(i,j){
  return this.cache[j+1]-this.cache[i];
}

const testVals = [0,1,2,3,4,5];
const test = new Range(testVals);
console.log(test.sumRange(1,3), 'should be 6');
console.log(test.sumRange(1,1), 'should be 1');
