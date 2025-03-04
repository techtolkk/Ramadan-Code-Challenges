/**
 * 1️⃣
 * solution for mutliple of 3 and 5 of given number.
 * description: -->Find the sum of all multiples of 3 or 5 below a given number
 * example : 10 --> 3,5,6,9 and sum =23 (excluding 10)
 */

// TIME COMPLEXITY IS O(N)  as we loop to to the very end of number
// means number=100, 99 operations n-1 but 1 is constant so it is O(n)
// SPACE COMPLEXITY IS O(1) as we dont have any variable that depend on
// unknown value like 'n'
function mutlipleOf3And5(number) {
  //when number is 1 then every number is multiple of 1 .
  // when number is 3, then there is not number below 3 or 5 that is either
  // multiple of 3 or 5 except 1 and 1, except 1 so sum is 1
  if (number <= 5) return 1;

  let sum = 0;

  //loop over all number below the given number👇
  for (let value = 3; value < number; value++)
    // if the number is mutliple of either 3 or 4, it should be divisor
    // of either 3 or 5.
    //example: 3 is mutlple of 3 cos it statisfies 3xk =3 and it is
    // 3x1=3. some goes for 5.
    // some times 15 is mutliple of both of them so that is why
    // we have or(||) condition to handle such edge case.👇
    if (value % 3 === 0 || value % 5 === 0) sum += value;

  return sum;
}

/**
 * 2️⃣
 * Given a string, count how many characters appear more than once.
 * Example: "aabBcde" → 2 (a and b both appear twice, case insensitive).
 *
 * */
// TIME COMPLEXITY IS O(N) AS size function
// in the set takes (n) times to count characters
// and it worest case if there is not duplcate
// n --number of charactes in the original string
// is same to k--number of characters in the new string.

// SPACE COMPLEXITY IS O(N)  as we created new Set to allocate
// characters so worest case if there is not duplicte
// in the original string, and contains 1000 characters,
// it needs 1000 space in the memory.
function countDuplicates(strValue) {
  //for 0 elements or one elemnet, there is not duplicate.
  if (strValue.length === 0 || strValue.length === 1) return 1;

  // as Arrays are Iterables--Iterable base class as parent then
  // we can create, in Set, we create from all iterables like Strigs, and
  // and Maps.
  // cos of nature of Set, it removes duplicates, then subtract
  // origianl length from current length (after removed duplication)
  return strValue.length - new Set(strValue.toLowerCase()).size;
}

console.log(countDuplicates("aabBcde"));

/**
 * 3️⃣
 * Check if a given sentence is a pangram
 * (contains every letter of the alphabet at least once).
 * Example: "aabBcde" → 2 (a and b both appear twice, case insensitive).
 *
 * */

//TIME COMPLEXITY IS O(1) becuase alphabets lenght is 26 and we
// know that we will never run loop over more than 26.
//SPACE COMPLEXITY IS O(1)
function detectPangram(strValue) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const currentString = strValue.toLowerCase();
  for (let i = 0; i < alphabets; i++) {
    const char = alphabets[i];
    //check if given string contains current letter in the alphebets
    if (!currentString.includes(char)) return false;
  }
  return true;
}
const result = detectPangram("The   quick brown fox jump over the lazy dog");

/**
 * 4️⃣
 * Your Order, Please
 * Description: Given a string of words,
 * sort them based on the number inside each word.
 * Example: "is2 Thi1s T4est 3a" → "Thi1s is2 3a T4est"
 * */

//TIME COMPLEXITY IS O(nlogn) as sort function uses merge sort behind the scene.
// SPACE COMPLEXITY OS O(N) spliting and allocating to array is (n)
function stringOrder(strValue) {
  // conver the given string to array of elements based on the
  // space between wors as it is long string.
  // then sort based on if :
  /// --> if number in the current string smaller than next one.
  // by the nature of sort, funciton, negative values come
  // first (ascending order), that is why
  // smaller value -larger value =-negative,

  return strValue.split(" ").sort((a, b) => {
    // these two lines using regular expression
    // meaning replace every thing that is not number (0-9) with " "
    // emtpy string, and convert that remaing (surely number ) to number
    // data type to do substraction operation.
    let firstStrNumber = parseInt(a.replace(/[^0-9]/g, " "));
    const secondStrNumber = parseInt(b.replace(/[^0-9]/g, " "));
    return firstStrNumber - secondStrNumber;
  });
}

stringOrder("is2 Thi1s T4est 3a");

/**
 * 6️⃣
 * Array Diff
 * Description: Given two arrays, return a new
 * array that removes all values from the
 * first array that are present in the second.
 * Example: [1,2,2,2,3], [2] → [1,3]
 */

//TIME COMPLEXITY IS O(N) because filter is looping over all elements.
// SPACE COMPLEXITY IS O(1) , we are not using any
// extra space (at least except input arrays and
// they are not counted inthe space complexity computation)
function arrayDiff(array1, array2) {
  // loop over the elements in the array 1 because that is
  // an array , we need to remove it's elements from second array.
  // then return every element in array1 but not in array2.
  return array1.filter((item) => !array2.includes(item));
}

const diff = arrayDiff([1, 2, 2, 2, 2, 3], [2]);
