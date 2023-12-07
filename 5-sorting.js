
function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j +1];
                arr[j+1] = temp;
                noSwaps = false;
            }
            if (noSwaps) break;
        }
    }
    return arr;
}
function selectionSort (arr) {
    const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}
function insertionSort (array) {
    const arr = array.slice();
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]) {
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]]; 
            }
            else break;
        } 
    }
    return arr;
}
// Merge Sort
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const leftArr = arr.slice(0,mid);
    const rightArr = arr.slice(mid);
    mergeSort(leftArr), mergeSort(rightArr);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length &&  rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        }
        else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}
// End of merge sort 

// Quick Sort: Shorter version
function quicksort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(element => element < pivot);
    const middle = arr.filter(element => element === pivot);
    const right = arr.filter(element => element > pivot);
  
    return quicksort(left).concat(middle).concat(quicksort(right));
}

// Quick sort: Long but detailed version
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)]; 
    let i = left; 
    let j = right; 

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

