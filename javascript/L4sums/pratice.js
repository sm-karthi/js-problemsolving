function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Sum of the array " + sum);
}
sum([23, 56, 89, 90, 45]);

// How sort in array
function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(sort([65, 93, 10, 89, 200, 5]));  // Output: [ 5, 10, 65, 89, 93, 200 ]

/* function gapArr(arr){
    let count = 0;
    let a = 0;
    for(let i = 0; i < arr.length; i = i+2){
        for(let j = arr[i]; j < arr[j]; j++){
            count++;
        }
        
        if(count > a){

        }
    }
}
gapArr([23, 45, 67, 78, 12, 23]); */


// Patten dimond shap
function patten(n) {

    for (let i = 1; i <= n; i++) {
        let g = "";
        let str = "";
        let res = "";

        for (let j = 1; j <= n - i; j++) {
            g += " ";
        }
        for (let k = 1; k <= i; k++) {
            str += k + " ";
        }
        res = g + str;
        console.log(res);
    }

    for (let i = n - 1; i >= 1; i--) {
        let g = "";
        let str = "";
        let res = "";

        for (let j = 1; j <= n - i; j++) {
            g += " ";
        }
        for (let k = 1; k <= i; k++) {
            str += k + " ";
        }

        res = g + str;
        console.log(res);
    }
}
patten(3);

// Duplicate values remove of array
function Duplicate(arr) {
    let e = [];

    for (let i = 0; i < arr.length; i++) {
        let already = false;

        for (let j = 0; j < e.length; j++) {
            if (arr[i] === e[j]) {

                already = true;
                break;
            }
        }
        if (!already) {
            e.push(arr[i]);
        }

    }

    console.log(e);
}
Duplicate([1, 2, 4, 8, 2, 5, 4, 4]);

// Second max value
function SecundMax(arr) {
    let a = arr[0];
    let b = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > a) {
            a = arr[i];
        }
    }
    for (let j = 0; j < arr.length; j++) {

        if (a === arr[j]) {
            continue;
        }
        else if (b < arr[j]) {
            b = arr[j];
        }
    }
    console.log("Second maximum value " + b);
}
SecundMax([67, 239, 120, 300, 268, 175, 298]);

// Intersection of Two Arrays

function arrayChunk(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        let chunk = [];
        for (let j = i; j < i + size && j < arr.length; j++) {
            chunk.push(arr[j]);
        }
        result.push(chunk);
    }
    console.log(result);
}

arrayChunk([1, 2, 3, 4, 5], 2);

// Dimond shap but even numbers instead print star
function dimond(n) {

    for (let i = 1; i <= n; i++) {
        let g = "";
        let str = "";
        let res = "";
        let star = "";
        for (let j = 1; j <= n - i; j++) {
            g += " ";
        }
        for (let k = 1; k <= i; k++) {
            star = k;
        }

        if (star % 2 === 0) {
            for (let l = 1; l <= i; l++) {
                str += "* ";
            }
            
        }
        else {
            for (let l = 1; l <= i; l++) {
                str += l + " ";
            }
        }

        res = g + str;
        console.log(res);
    }

    for (let i = n - 1; i >= 1; i--) {
        let g = "";
        let str = "";
        let res = "";
        let star = "";
        for (let j = 1; j <= n - i; j++) {
            g += " ";
        }
        for (let k = 1; k <= i; k++) {
            star = k;
        }

        if (star % 2 === 0) {
            for (let l = 1; l <= i; l++) {
                str += "* ";
            }
            
        }
        else {
            for (let l = 1; l <= i; l++) {
                str += l + " ";
            }
        }

        res = g + str;
        console.log(res);
    }
}
dimond(3);


let a = "Hello world"; // Output is "world Hello"
a = a.split(" ");
let str = "";
for(let i = a.length-1; i >= 0; i--){
    str += a[i] +" ";
}
console.log(str.trim());


