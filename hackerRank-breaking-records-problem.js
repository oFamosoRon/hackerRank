/**
 *
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records
 */

function breakingRecords(scores) {
  let highRecord = scores[0];
  let lowRecord = scores[0];

  let breakHighRecord = 0;
  let breakLeastRecord = 0;

  scores.forEach((item) => {
    if (item > highRecord) {
      breakHighRecord++;
      highRecord = item;
    }

    if (item < lowRecord) {
      breakLeastRecord++;
      lowRecord = item;
    }
  });

  return [breakHighRecord, breakLeastRecord];
}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(scores));

main();
