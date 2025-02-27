// Input: x = 123
// Output: 321

let reverse = (x) => {
  const isNegative = x < 0;
  x = Math.abs(x);

  let reversed = 0;
  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  if (isNegative) reversed = -reversed;
  if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1) {
    return 0;
  }
  return reversed;
};

const x = 123; 
console.log(reverse(x));
