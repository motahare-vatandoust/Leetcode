// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.

let firstUniqChar = (s) => {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? +1 : 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i;
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
