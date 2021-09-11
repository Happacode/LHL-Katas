const instructorWithLongestName = function(instructors) {
  let longestName = 0;
  let countedName = 0;
  let result;
  
  for(let instructor of instructors){
    countedName = instructor.name.length;
    if(countedName > longestName){
      longestName = countedName;
      result = instructor;
    }
  }
  return result;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
])); // Answer 'Jeremiah', course 'Web'
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
])); // Answer 'Domascus', course: 'Web'