/* Sorting Algorithm */
let arr = (function createArrayOfRandomNumbers(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.ceil(Math.random() * 1000));
  }
  return arr;
})(1000);

const Sort = function (array) {
  this.array = array;
};

Sort.prototype = {
  BuiltInSort: function () {
    return this.array.sort((a, b) => a - b);
  },

  BubbleSort: function () {
    /* This is sorting algorithm is of time complexity of O(n^2).*/
    let arr = [...this.array];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  },

  QuickSort: function () {
    let arr = [...this.array];
    function sort(arr, start, end) {
      if (start >= end) return;
      let pivotIndex = pivot(arr, start, end);
      sort(arr, start, pivotIndex - 1);
      sort(arr, pivotIndex + 1, end);
    }

    function pivot(arr, start, end) {
      let pivotIndex = start;
      let pivotValue = arr[end];
      for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
          swap(arr, i, pivotIndex);
          pivotIndex++;
        }
      }
      swap(arr, pivotIndex, end);
      return pivotIndex;
    }

    function swap(arr, start, end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
    }

    sort(arr, 0, arr.length - 1);
    return arr;
  },
};

const time = function (cb) {
  console.time();
  let val = cb();
  console.timeEnd();
  return val;
};

let sorted = time(() => new Sort(arr).QuickSort());
// console.log(sorted);

/* Combine Tow sorted array which needs to be sorted as well */
function combineSorted(arr1, arr2) {
  /*
  arr1 = [1, 3, 7, 9];
  arr2 = [2, 4, 5];
  output =[1,2,3,4,5,7,9]
 */

  let [minArray, maxArray] =
    arr1.length > arr2.length ? [arr2, arr1] : [arr1, arr2];

  const arrLen = minArray.length;

  let combinedArr = [];
  arr1Index = 0;
  arr2Index = 0;

  for (let i = 0; i < arrLen; i++) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      combinedArr.push(arr1[arr1Index]);
      arr1Index++;
    }
    {
      combinedArr.push(arr2[arr2Index]);
      arr2Index++;
    }
  }

  return [...combinedArr, ...maxArray.slice(arrLen)];
}

/* Printing Sum of Border Elements */
function SumOfBorderElements() {
  let mat = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];
  /* result = 12 */

  let m = mat.length;
  let n = mat[0].length;
  let sum = 0;
  /* Imperative method */
  for (let i = 0; i < m - 1; i++) {
    if (i == 0) {
      for (let j = 0; j < n; j++) {
        sum += mat[i][j];
        sum += mat[n - 1][j];
      }
    } else if (i < n - 2) {
      sum = sum + mat[i][0] + mat[i][n - 1];
    }
  }
  // console.log(sum);
  /* Declarative Method*/

  let newSum = mat.reduce((sum, item, i) => {
    if (i == 0) {
      sum += item.reduce((sum, currItem, j) => {
        sum += currItem;
        /* What I am doing here is I am adding sum of elements of Last Array
          while I am adding sum of First Array
        */
        sum += mat[n - 1][j];
        return sum;
      });
    } else if (i < n - 1) {
      /* Here I am adding only first and last element of array */
      sum += item[0] + item[n - 1];
    }
    return sum;
  }, 0);
  console.log(newSum);
}
