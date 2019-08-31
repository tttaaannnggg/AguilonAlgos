/* Given a string S and a string T,
 * find the minimum window in S which will contain
 * all the characters in T in complexity O(n).
 *
 * Example:
 *
 * Input: S = "ADOBECODEBANC", T = "ABC"
 * Output: "BANC"
 * Note:
 *
 * If there is no such window in S that covers all
 * characters in T, return the empty string "".
 *
 * If there is such window, you are guaranteed that
 * there will always be only one unique minimum
 * window in S.
 *
 */

const minWindow = function(s, t) {
  const subStrCounts = {};
  let targetSize = 0;
  for (let i = 0; i < t.length; i++) {
    const k = t[i];
    if (subStrCounts[k] === undefined) {
      subStrCounts[k] = 0;
      targetSize++;
    }
    subStrCounts[k]++;
  }
  let curSize = 0;
  const bestSubstr = [0, 0];

  let lowestLen = Infinity;
  let p1 = 0;
  let p2 = 0;

  while (p1 < s.length && p2 < s.length + 1) {
    if (curSize !== targetSize) {
      const char = s[p2];
      if (subStrCounts[char] !== undefined) {
        subStrCounts[char] -= 1;
        if (subStrCounts[char] === 0) {
          curSize++;
        }
      }
      p2++;
    } else {
      const char = s[p1];
      const len = p2 - p1;
      if (len < lowestLen) {
        lowestLen = len;
        [bestSubstr[0], bestSubstr[1]] = [p1, p2];
      }
      if (subStrCounts[char] !== undefined) {
        subStrCounts[char]++;
        if (subStrCounts[char] > 0) {
          curSize--;
        }
      }
      p1++;
    }
  }
  return s.slice(...bestSubstr);
};
