
/**
 * https://www.hackerrank.com/challenges/apple-and-orange/problem
 * 
 * Sam's house is between s = 7 and t = 10.
 * 
 * Apple tree is a = 4
 * Orange tree is b = 12
 * 
 * apples fall at [2,3,-4]
 * oranges fall at [3,-2,-4]
 * 
 */



function countApplesAndOranges(s, t, a, b, apples, oranges) {

    if (isNaN(s) || isNaN(t) || isNaN(a) || isNaN(b) || !Array.isArray(apples) || !Array.isArray(oranges)) {
        console.log("wrong parameter type")
        return
    }
   
    let fallenApplePositions = apples.map(function(item) {
        return item + a
    })

    let fallenOrangePositions = oranges.map(function(item) {
        return item + b
    })

    let applesFallenInRange = 0
    let orangesFallenInRange = 0

    fallenApplePositions.forEach(function(item){
        if(item >= s && item <= t) {
            applesFallenInRange++
        }
    })

    fallenOrangePositions.forEach(function(item) {
        if(item >= s && item <= t) {
            orangesFallenInRange++
        }
    })

    console.log(applesFallenInRange)
    console.log(orangesFallenInRange)

}

function main() {
    let s = 7
    let t = 10

    let a = 4
    let b = 12

    let apples = [2,3,-4]
    oranges = [3,-2,-4]

    countApplesAndOranges(s, t, a, b, apples, oranges)
}

main()