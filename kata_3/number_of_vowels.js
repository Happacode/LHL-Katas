const numberOfVowels = function(data) {
  let count = 0;
  let vowels = ("aeiouAEIOU");

  for (let i = 0; i < data.length; i++) {
    if (vowels.indexOf(data[i]) > (-1)) {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange")); // Answer 3
console.log(numberOfVowels("lighthouse labs")); // Answer 5
console.log(numberOfVowels("aeiou")); // Answer 5