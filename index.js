
//counting how man variables are in the string
const str = 'I love to sing';
const test = '1 L0V3 2 S1NG'
function Vowels(str){
  var re = new RegExp(/[aeiou]+/gi);
  var Vowels1 = str.match(re);
  if(Vowels1.length >= 1){
  return Vowels1.length
  }else{
    return 'No Vowels'
  }
}


//fibonaccio with recursion
function fib(n) {
  if (n < 2){
    return n
  }
  return fib(n - 1) + fib (n - 2)
}

fib(2)

//check if number is prime
const prime = (num) => {
  let isPrime = true;
  if(num <= 1){
      isPrime = false;
    }
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      isPrime = false;
    }
  }
  return isPrime;
}

prime(3)


//find the reverse of the str
function reverseWords(str) {
    str = str.split('') // makes every string an index of an array
    .reverse() // reverses the array
    .join('') //joins the array
    .split(' ') // splits it by space
    .reverse() // puts it back in order from beginning to end
    return str.join(' ') //joins it to make it a string
}


//Alphabatize an array.
const alphabetize = (word) => {
    if (!word) {
        return;
    }
    word = word.split('');
    word = word.sort();
    word = word.join('');
    return word;
}

const words = ['map', 'art', 'how', 'rat', 'tar', 'who', 'pam', 'shoop'];


//understanding radix sort:
const radixSort = arr => {
  const maxNum = Math.max(...arr) * 10;
  let divisor = 10;

  while (divisor < maxNum) {
    let buckets = [...Array(10)].map(() => []);

    for (let num of arr) {
      buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
    }

    arr = [].concat.apply([], buckets);
    divisor *= 10;
  }
  return arr;
};


//implementing quick sort:
const quickSort = (
  unsortedArray,
  comparator = defaultComparator
) => {

  // Create a sortable array to return.
  const sortedArray = [ ...unsortedArray ];

  // Recursively sort sub-arrays.
  const recursiveSort = (start, end) => {

    // If this sub-array contains less than 2 elements, it's sorted.
    if (end - start < 1) {
      return;
    }

    const pivotValue = sortedArray[end];
    let splitIndex = start;
    for (let i = start; i < end; i++) {
      const sort = comparator(sortedArray[i], pivotValue);

      // This value is less than the pivot value.
      if (sort === -1) {

        // If the element just to the right of the split index,
        //   isn't this element, swap them.
        if (splitIndex !== i) {
          const temp = sortedArray[splitIndex];
          sortedArray[splitIndex] = sortedArray[i];
          sortedArray[i] = temp;
        }

        // Move the split index to the right by one,
        //   denoting an increase in the less-than sub-array size.
        splitIndex++;
      }

      // Leave values that are greater than or equal to
      //   the pivot value where they are.
    }

    // Move the pivot value to between the split.
    sortedArray[end] = sortedArray[splitIndex];
    sortedArray[splitIndex] = pivotValue;

    // Recursively sort the less-than and greater-than arrays.
    recursiveSort(start, splitIndex - 1);
    recursiveSort(splitIndex + 1, end);
  };

  // Sort the entire array.
  recursiveSort(0, unsortedArray.length - 1);
  return sortedArray;
};

//implementation of bubble sort: 
function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//binary search tree traversal breadth-first:
BinarySearchTree.prototype.traverseBreadthFirst = function (func) {
  let queue = [this];
  
  while (queue.length) {
    let currentNode = queue.shift();
    
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
    
    func(currentNode.value)
  }
};

//Merge Sort Algorithm:

// Split the array into halves and merge them recursively 
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]

//Palindrome 
const isPalindrome = (x) => {
  const string = x.toString().split('').join('')
  const reverse = x.toString().split('').reverse().join('')
  console.log(reverse)
  if(string === reverse){
      return true;
  }else {
      return false;
  }
}

isPalindrome(121)

//quick sort example in javascript
function quick_Sort(origArray) {
	if (origArray.length <= 1) { 
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

var myArray = [3, 0, 2, 5, -1, 4, 1 ];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);

// find vowels and consonants.

function vowelsAndConsonants(s) {
  const vowels = 'aeiouAEIOU';
    for (let i = 0; i < s.length; i++) { 
        if(vowels.indexOf(s[i]) !== -1){
          console.log(s[i])
        }
    }
    for(let j = 0; j <s.length; j++){
      if(vowels.indexOf(s[j]) === -1){
        console.log(s[j])
      }
    }
}

vowelsAndConsonants('javascript')

//factorial 1 line arrow function with recursion:
const factorial = (n) => (n <= 0 ? 1 : n * factorial(n-1))


// different way to do bubble sort: 
function swap(arr, first_Index, second_Index){
  var temp = arr[first_Index];
  arr[first_Index] = arr[second_Index];
  arr[second_Index] = temp;
}

function bubble_Sort(arr){

  var len = arr.length,
      i, j, stop;

  for (i=0; i < len; i++){
      for (j=0, stop=len-i; j < stop; j++){
          if (arr[j] > arr[j+1]){
              swap(arr, j, j+1);
          }
      }
  }

  return arr;
}
console.log(bubble_Sort([3, 0, 2, 5, -1, 4, 1]));

//counting sort

// counting sort
countingSort(list){
  var bucket = [],idx = 0;

  // assign each element to its bucket
  for(var i = 0;i<list.length;i++){
    bucket[list[i]] = bucket[list[i]] || 0
    bucket[list[i]] ++
  }

  // now combine all the buckets
  for(i = 0; i< bucket.length;i++){
    while(bucket[i] && bucket[i] > 0){
      // skip empty buckets and loop over every elements in a bucket
      list[idx++] = i;
      bucket[i] --;
    }
  }
  return list
}