const repeatNumbers = function(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let line = '';
    
    for (let j = 0; j < arr[i][1]; j++) {
      line += arr[i][0];
    }

    output.push(line);
  }
  
  return output.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));