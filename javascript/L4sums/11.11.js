function printStar(n) {
    for(let i = 1; i <= n; i++) {
        let output = getSpaces(n - i);
        let pattern = getNumSequence(i);
        console.log(output + pattern);

    }

    // Reverse print
    for(let i = n - 1; i >=1; i--) {
        let output = getSpaces(n - i);
        let pattern = getNumSequence(i);
        console.log(output + pattern);
    }

}

function getSpaces(n) {
    let outputStr = "";
    for(let i = 1; i <= n; i++) {
        outputStr += " ";
    }
    return outputStr;
}

function getNumSequence(n) {
    let outputStr = "";
    for(let i = 1; i <= n; i++) {
        outputStr += i + " ";
    }
    return outputStr;
}

printStar(3);

function countDistinctVowels(str) {
    const vowels = new Set();
    for (let i = 0; i < str.length; i++) {
        if ('aeiou'.includes(str[i])) {
            vowels.add(str[i]);
        }
    }
    console.log(vowels.size);
}

// Test cases
countDistinctVowels("cool");  // Output: 1
countDistinctVowels("hello"); // Output: 2
countDistinctVowels("aeiou"); // Output: 5
countDistinctVowels("abcd");  // Output: 1
countDistinctVowels("apple"); // Output: 2


function sum(arr, value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            value = i;
            break;
        }
    }
    console.log("Index "+value);
}
sum([1, 2, 7, 9, 10, 2], 2);
