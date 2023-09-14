/**
 *
 * 1 2 3
 * 4 5 6
 * 7 8 9
 *
 * M = n (n2 + 1) / 2
 */

function calculateMagicSquareNumber(s) {
  let n = s.length;
  return (n * (n * n + 1)) / 2;
}

function isMagicSquare(s) {
  let i = 0;
  let j = 0;
  let width = s.length;
  let height = s[0].length;

  // this formula was given by the problem
  let magicNumber = calculateMagicSquareNumber(s);

  if (width != height) {
    console.log("not a square matrix");
    return false;
  }

  for (i = 0; i < width; i++) {
    if (s[i].length != height) {
      console.log("not a square matrix");
      return false;
    }
  }

  let auxLineSum = 0;
  let auxColumnSum = 0;
  let auxDiagonal1 = 0;
  let auxDiagonal2 = 0;
  let sums = [];

  //sums rows, columns and diagonals
  for (i = 0; i < width; i++) {
    auxDiagonal2 += s[i][width - i - 1];
    for (j = 0; j < width; j++) {
      auxLineSum += s[i][j];
      auxColumnSum += s[j][i];

      if (i == j) {
        auxDiagonal1 += s[i][j];
      }
    }
    sums.push(auxLineSum);
    sums.push(auxColumnSum);
    auxColumnSum = 0;
    auxLineSum = 0;
  }

  sums.push(auxDiagonal1);
  sums.push(auxDiagonal2);

  // row, column, first diagonal, second diagonal
  console.log("all sums: ", sums);

  if (
    sums.every((item) => {
      return item == magicNumber;
    })
  ) {
    return true;
  }

  return false;
}

function generateAllMagicSquares(s) {
  // should return a matrix
  let size = s.length;
  let validNumers = [];

  for (let i = 1; i <= size * size; i++) {
    validNumers.push(i);
  }

  console.log("all valid numbers: ", validNumers);
}

function formingMagicSquare(s) {
  if (isMagicSquare(s)) {
    return s;
  }

  console.log("need to reduce", s);
  return generateAllMagicSquares(s);
}

function main() {
  let s = [
    [5, 3, 4],
    [1, 5, 8],
    [6, 4, 2],
  ];
  formingMagicSquare(s);
}

main();
