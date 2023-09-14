/**
 * https://www.hackerrank.com/challenges/the-birthday-bar
 */

function birthday(s, d, m) {
  // sum == d
  // length == m
  let size = s.length;
  let allCombinations = [];

  for (let i = 0; i < size - m + 1; i++) {
    let subList = s.slice(i, i + m);

    let subListSum = 0;

    subList.forEach((element) => {
      subListSum += element;
    });

    if (subListSum == d) {
      allCombinations.push(subList);
    }
  }

  console.log(allCombinations);
  return allCombinations.length;
}

birthday([1, 2, 1, 3, 2], 3, 2);
