// In this exercise, we will be given an array of 2 or more numbers. We will then have to find the two largest numbers in that array, and sum them together.
const sumLargestNumbers = function(data) {
  let highestInt = 0;
  let nextHighestInt = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > highestInt) {
      nextHighestInt = highestInt;
      highestInt = data[i];
    } else if (data[i] > nextHighestInt) {
      nextHighestInt = data[i];
    }
  }
  return highestInt + nextHighestInt;
}

console.log(sumLargestNumbers([1, 10])); // Answer = 11
console.log(sumLargestNumbers([1, 2, 3])); // Answer = 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // Answer = 126