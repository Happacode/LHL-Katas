const conditionalSum = function(values, condition) {
  
  let result = 0;
  
  if (condition == "odd") {
    remainder = 1;
  } else {
    remainder = 0;
  }
  
  for (i = 0; i < values.length; i++) {
    if (values[i] % 2 === remainder) {
      result += values[i];    
    }
  }
  return result;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // Answer 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // Answer 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // Answer 144
console.log(conditionalSum([], "odd")); // Answer 0