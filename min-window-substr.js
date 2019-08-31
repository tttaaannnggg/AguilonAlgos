/*
 * given a string s and a string t, find the minimum window in s which will contain all chars in t in O(n) time
 * 
 * ex: s = adobecodebanc, t = abc
 * output: banc
 * (otherwise return empty str)
 */

const inp = 'adobecodebanc';
const target = 'abc';

function mws(input, substr){
  const target = new Set(substr.split(''));
  const positions = new Set();
  
}
/*
 * so, what are the possibilities at any given step?
 * create a data structure to 
 */
