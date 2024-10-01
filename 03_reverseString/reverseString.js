const reverseString = function(string) {
  let len = string.length;
  let char = "";
  let word = "";
  let c = string.length;
  for (i = 0; i < len; i++) {
    char = string.substring(c,c-1);
    c--;
    word+=char;
  };
  return word;
};

// Do not edit below this line
module.exports = reverseString;
