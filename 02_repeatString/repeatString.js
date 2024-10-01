const repeatString = function(string, times) {
  if (times < 0) return "ERROR";
  let m = "";
  for (let rep = 0; rep < times; rep++) {
    m+=string;
  };
  return m;
};

// Do not edit below this line
module.exports = repeatString;



