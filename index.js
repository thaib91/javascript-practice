
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