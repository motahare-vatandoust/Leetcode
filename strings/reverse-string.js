// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

let reverseString = (s) => {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
};

let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
