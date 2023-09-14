/*
    HackerRanck grading problem

*/

function nextMultipleOfFive(item) {
  let next = Math.floor(item / 5);

  if (item % 5 > 0) {
    next++;
  }

  return next * 5;
}

function gradingStudents(grades) {
  if (!Array.isArray(grades)) {
    console.log("wrong type");
    return;
  }

  var finalGrades = [];

  grades.forEach((item) => {
    if (item < 38) {
      finalGrades.push(item);
    } else {
      let nextMultipleOf5 = nextMultipleOfFive(item);

      if (nextMultipleOf5 - item < 3) {
        finalGrades.push(nextMultipleOf5);
      } else {
        finalGrades.push(item);
      }
    }

    console.log(`input: ${item} - output ${finalGrades}`);
  });

  return finalGrades;
}

function main() {
  let grades = [4, 73, 67, 38, 33];

  console.log(gradingStudents(grades));
}

main();
