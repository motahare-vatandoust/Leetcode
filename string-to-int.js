// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.

function myAtoi(s) {
  //ignore whitespace
  s = s.trim();
  if (s.length === 0) return 0;

  //sign? + or -
  let sign = 1;
  let index = 0;
  if (s[index] === "-") {
    sign = -1;
    index++;
  } else if (s[index] === "+") {
    index++;
  }

  //read the integer
  let result = 0;
  while (index < s.length && s[index] >= "0" && s[index] <= "9") {
    result = result * 10 + (s[index] - "0");
    index++;
  }

  result *= sign;

  // 32 BIT
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;
  if (result < INT_MIN) return INT_MIN;
  if (result > INT_MAX) return INT_MAX;

  return result;
}

console.log(myAtoi("42"));
console.log(myAtoi("   -042"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
console.log(myAtoi("words and 987"));
