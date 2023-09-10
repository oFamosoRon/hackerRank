/**
 * https://www.hackerrank.com/challenges/kangaroo/problem
 * 
 * x1 = 2
 * v1 = 1
 * 
 * x2 = 1
 * v2 = 2
 * 
 */


function kangaroo(x1, v1, x2, v2) {
   let result = "NO"


   if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) {
        return result
   }

   if ((v1 - v2) == 0 ) {
    return result
   }

   let numberOfJumps = (x1 - x2) / (v1 - v2)

   if(Number.isInteger(numberOfJumps)) {
    result = "YES"
   }

   console.log(result)
   return result

}

function main() {

   x1 = 0
   v1 = 3
   x2 = 4
   v2 = 2

   kangaroo(x1, v1, x2, v2)

}

main()