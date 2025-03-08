//1. Multiples of 3 or 5
function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10)); 


//2. Counting Duplicates
function countDuplicates(str) {
    const freqMap = {};
    let count = 0;

    str.toLowerCase().split('').forEach(char => {
        freqMap[char] = (freqMap[char] || 0) + 1;
    });

    for (const key in freqMap) {
        if (freqMap[key] > 1) {
            count++;
        }
    }

    return count;
}

console.log(countDuplicates("aabBcde")); 


// 3. Detect Pangram
function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz8';
    const sentenceLower = sentence.toLowerCase();
    
    for (let char of alphabet) {
        if (!sentenceLower.includes(char)) {
            return false;
        }
    }
    
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy  dog")); 


// 4. Your Order, Please
function order(words) {
    return words.split(' ').sort((a, b) => {
        const numA = (a.match(/\d/) || [0])[0];  
        const numB = (b.match(/\d/) || [0])[0];  
        return numA - numB;  
    }).join(' ');
}

console.log(order("is2 This T4est 3a"));  
console.log(order("")); 



//5. Array Diff
function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item));
}

console.log(arrayDiff([1, 2, 2, 3], [2]));

