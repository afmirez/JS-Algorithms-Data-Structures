function validAnagram(str1, str2) {
    let obj1 = []
    let obj2 = []

    for (let character in str1) { obj1[str1[character]] = (obj1[str1[character]] || 0) + 1}
    for (let character in str2) { obj2[str2[character]] = (obj2[str2[character]] || 0) + 1}
    for (const key in obj1) { if (obj1[key] !== obj2[key]) {return false} }

    return true

}
function sameFrequency (int1,int2) {
    const numberOne = int1.toString();
    const numberTwo = int2.toString();
    let obj1 = {};
    let obj2 = {};

    if(numberOne.length != numberTwo.length) return false
    for (const digit of numberOne) {obj1[digit] = (obj1[digit] || 0) + 1}
    for (const digit of numberTwo) {obj2[digit] = (obj2[digit] || 0) + 1}
    for (const key in obj1) {if (obj1[key] != obj2[key]) {return false} }
    return true
}
function areThereDuplicates (...args) {
    const arr = args
    let obj = {}
    for (const element of arr) {
        obj[element] = (obj[element] || 0) + 1
        if (obj[element] > 1) { return true}
    }
    return false
}

// Running the code 
const resultValidAnagram  = validAnagram('parameter1', 'parameter2') 
const resultSameFrequency = sameFrequency(182, 2328)
const resultAreThereDuplicates = areThereDuplicates(1, 1, 2, 2)

// Uncomment this as needed
// console.log(resultValidAnagram)
// console.log(resultSameFrequency)
// console.log(resultAreThereDuplicates)