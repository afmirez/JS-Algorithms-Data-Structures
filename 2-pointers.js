function countUniqueValues(arr) {
    let counter = 0;
    let j = 1
    for (let i in arr) {
        if (arr[i] != arr[j]) {
            counter++;
        }
        j++
    }
    return counter
}

function averagePair(arr, targetAverage){
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        const currentAvg = (arr[left] + arr[right]) / 2
        if (currentAvg === targetAverage) return true;
        else if (currentAvg < targetAverage) left++;
        else if (currentAvg > targetAverage) right--;
    }
    return false
}

function isSubsequence(str1, str2) {
    let pointerA = 0
    for (let pointerB = 0; pointerB < str2.length; pointerB++) {
        if (str1[pointerA] == str2[pointerB]) {
            if (pointerA == str1.length-1) return true 
            pointerA++;
        }
    }
    return false
}

//Running the code
const resultCountUniqueValues = countUniqueValues([]) 
const resultAveragePair = averagePair([],4)
const resultIsSubsequence =  isSubsequence('abc', 'acb'); // false (order matters)

//Uncomment as needed
// console.log(resultCountUniqueValues)
// console.log(resultAveragePair)
// console.log(resultIsSubsequence)