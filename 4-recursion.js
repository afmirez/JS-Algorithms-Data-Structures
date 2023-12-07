function power (number, times) {
    if(times === 0) return 1;
    if (times == 1) return number;
    return (number * power(number, times-1))
}
function factorial(number){
    if (number === 0) return 1
    return number * factorial(number-1)
}
function reverse (string) {
    if (string.length === 1) return string[0];
    const lastElement = string[string.length-1];
    const reminder = string.slice(0, string.length-1)
    return lastElement + reverse(reminder);
}
function isPalindrome(string) {
    if (string.length === 1 || string.length === 0) return true;
    let firstElement = string[0];
    let lastElement = string[string.length-1];
    if (firstElement === lastElement) {
        return isPalindrome(string.slice(firstElement+1, lastElement))
    }
    else {
        return false;
    }
}

function capitalizeFirst (arr) {
    let newArr = [];
    let newElement = arr[0][0].toUpperCase() + arr[0].slice(1, arr[0].length);
    if (arr.length === 1) {return newElement};
    newArr.push(newElement);
    return newArr.concat(capitalizeFirst(arr.slice(1,arr.length)));
}


//Saving Results
const resultPower = power(5,3);
const resultFactorial = factorial(5);
const resultReverse = reverse('colombia'); 
const resultIsPalidrome = isPalindrome('noon');
const resultCapitalizeFirst = capitalizeFirst(['yo', 'me', 'llamo', 'andres']);


// Uncomment as needed
// console.log(resultPower);
// console.log(resultFactorial);
// console.log(resultReverse)
// console.log(resultIsPalidrome)
// console.log(resultSomeRecursive);
// console.log(resultCapitalizeFirst);