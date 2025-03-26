function secondMaximum(arr) {
    let max = arr[0];
    let secondMax = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }
    console.log(secondMax);  
}

secondMaximum([12, 34, 90, 5, 400, 200]);

// Find max and min difference
function differenceTwoElement(arr){
    let max = arr[0];
    let min = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max ){
            max = arr[i];
        }

        if(arr[i] < min){
            min = arr[i];
        }
    }

    console.log(max - min);
}
differenceTwoElement([12, 34, 90, 5, 400, 200]);

function stringCount(){
    let str = "This is a string";
    let f = "is";

    let string = str.split(f);
    
    string = string.length-1;
    console.log(string);
    
   
    
}
stringCount();

// Reverse the string
function reverse(){
    let str = "Hello everyone";
    str = str.split(" ");
    let result = "";

    for(let i = str.length-1; i >= 0; i--){
        result += str[i]+" ";
    }
    console.log(result);
}
reverse();

// Sum of prime numbers
function sumOfPrimeNumbers(n){
    let sum = 0;
   
   function prime(n){
    if(n<=1){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;

   }

   for(let i=1;i<=n;i++){
    if(prime(i)){
        sum+=i;
    }
   }

    
    console.log(sum);
}

sumOfPrimeNumbers(10);

// Patten print
function pattenPrint(n){

    for(let i = 1; i <= n; i++){
        let gap = "";
        let result = "";
        for(let j = n-i; j >= 1; j--){
            gap += " ";
        } 
        for(let k = 1; k <= i; k++){
            result += i+" ";
        }

        console.log(gap+result);
        
    }
}
pattenPrint(3);

// Find the fist index and last index
function findIndex(arr, target){

    let firstIndex = "";
    let lastIndex = "";
    let check = true;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            if(check){
            firstIndex = i;
            check = false;
            }
            lastIndex = i;
        }

        
    }

    console.log("First index is "+firstIndex);
    console.log("Last index is "+lastIndex);
}
findIndex([4, 5, 3, 5, 7, 5, 8, 5], 5);

// If number is even print #
function evenAsh(n){
    let str = "";
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            str += "# ";
        }
        else{
            str += i + " " 
        }
    }
    console.log(str);
    
}
evenAsh(5);

function attFee(n){
    let total = 0;

    for(let i = 1; i <= n; i++){
        if(i <= 10){
            total += 5;
        }
        else if(i >= 11 && i <= 20){
            total += 3;
        }
        else{
            total += 2;
        }
    }

    console.log("Total fee " + total);
}
attFee(25);

// Find the first maximum number index in a array
function findFirstMaxIndex(arr){
    let max = arr[0];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
            index = i;
        }
    }
    console.log("First max index is " + index);
}
findFirstMaxIndex([12, 5, 20, 1, 2, 10]);

// card sum
function cardSum(arr){
    let mug = 500;
    let jeans = 3000;
    let TShirt = 1500;
    let pen = 10;

    let total = 0;

    for(let i = 0; i < arr.length; i++){
        let s = arr[i].split(" ");

        if(s[0] === "M"){
            total += Number(s[1]) * mug;
        }
        else if(s[0] === "J"){
            total += Number(s[1]) * jeans;
        }
        else if(s[0] === "T"){
            total += Number(s[1]) * TShirt;
        }
        else if(s[0] === "P"){
            total += Number(s[1]) * pen;
        }
    }

    console.log(total);
    
}
cardSum(["P 5","M 1"]);
