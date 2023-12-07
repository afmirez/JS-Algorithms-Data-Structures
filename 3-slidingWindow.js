function maxSubarraySum (arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}
function minSubArrayLen(nums, targetNumber) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    if(total < targetNumber && end < nums.length){
      total += nums[end];
            end++;
    }
    
    else if(total >= targetNumber){
      minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
    } 
    //
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
function findLongestSubstring(string) {
  let pointerA = 0;
  let pointerB = 0;
  let hashMap = {};
  let longestSub = 0;

  while (pointerB < string.length) {
    let charB = string[pointerB];
    let charA = string[pointerA];
    
    if (!hashMap[charB]) {
      hashMap[charB] = 1;
      pointerB++;
      if (pointerB - (pointerA) > longestSub ) {
        longestSub = pointerB - (pointerA);
      }
    }
    else if (hashMap[charB]) {

      delete hashMap[charA];
      pointerA++;
    }
  }
  return longestSub;
}

//Running the code
const resultMaxSubArraySum = maxSubarraySum([1,2,3,4,5,], 2);
const resultMinSubArrayLen= minSubArrayLen([2,3,1,2,4,3], 7);
const resultFindLongestSubstr =  findLongestSubstring('longestsubstring') // 8

//Uncomment as needed
// console.log(resultMaxSubArraySum = maxSubarraySu());
// console.log(resultMinSubArrayLen);
// console.log(resultFindLongestSubstr);