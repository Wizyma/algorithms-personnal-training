// SOME OF THESE IMPLEMENTATION COME FROM MY VIEWING OF THE AWSOME MIT OPEN CLASSWARE AND WHAT I UNDERSTOOD FROM IT

const { performance } = require('perf_hooks');

// LINEAR SORT

const linearSortArray = [1, 4, 2, 5, 9, 0, 6, 11, 90, 87, 23, 43, 21, 18];

const t0 = performance.now();

function linearSort (arr) {
  let shouldSortAgain = false
  for(let index = 0; index < arr.length; index++) {
    if(arr[index] > arr[index + 1]) {
      shouldSortAgain = true;
      var temp = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = temp
    }
  }

  if(shouldSortAgain) {
    return linearSort(arr);
  }

  return arr
}

linearSort(linearSortArray);
// BENCH END
const t1 = performance.now();
const perfLinear = "Call to linear sort took " + (t1 - t0) + " milliseconds." // ?

// MERGE SORT 

const mergeSortArray = [1, 4, 2, 5, 9, 0, 6, 11, 90, 87, 23, 43, 21, 18];

const mergeSortPerfStart = performance.now();

function merge(left, right) {
  if(!left || !right) {
    return null;
  }

   const results = [];
   let i = 0;
   let j = 0;

  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      results.push(left[i])
      i += 1;
    } else {
      results.push(right[j])
      j += 1;
    }
  }
  while(i < left.length) {
    results.push(left[i])
    i += 1;
  }
  while(j < right.length) {
    results.push(right[j])
    j += 1;
  }

  return results;
}

function mergeSort(arr) {
  if(!arr || !Array.isArray(arr)) {
    return null
  }

  if(arr.length < 2) {
    return arr;
  }
  const left = mergeSort(arr.slice(0, arr.length / 2)); 
  const right = mergeSort(arr.slice(arr.length / 2, arr.length)); 
  return merge(left, right)
}


mergeSort(mergeSortArray) 

const mergeSortPerfEnd = performance.now();
const perfMerge = "Call to merge sort took " + (mergeSortPerfEnd - mergeSortPerfStart) + " milliseconds." // ?


