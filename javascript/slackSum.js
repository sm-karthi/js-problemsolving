/* // 1st sum
let char = "A";
if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
    console.log("The character is a Vowel.");   
}
else if(char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
    console.log("The character is a Vowel.");   
}
else {
    console.log("The character is a consonant.");
}

// 2nd sum
let a =10;
let b = 30;
let c = 5;
let maxNumber = Math.max(a,b,c);
console.log(maxNumber);

// 3rd sum

let n = 4;
let countOdd = 1;
for (let i = 1; i <= n; i++){
    console.log(countOdd);
    countOdd +=2;
}

// 4th sum
function discount(a, b){
let d = 10;
let sum = 0;
for(let i = 1; i <= d; i++){
    sum += a ;
    a +=b; 
}
console.log("Day "+d+" : "+sum+" %");

}
discount(5, 2);

// 5th sum
function printAllMultiplesOf5Bet(a, b){
    for(let i = b; i >= a; i--){
        if(i % 5 === 0){
            console.log(i);
        }
    }
}
printAllMultiplesOf5Bet(10,30); */

//27/9/2024 Slack Sums
// 1 st sum
/* function multipleOf5(IntegerArr){
    let count = 0;
    for (let i = 0; i < IntegerArr.length; i++){
        if( IntegerArr[i] % 5 === 0){
            count++;
        }
    }
    return count;

}
console.log(multipleOf5([2, 15, 67, 90, 31]));

// 2nd sum
function AbetweenB(arr , a , b){
    let count = 0;
    let str = "";
    for (let i =0; i < arr.length; i++){
        if(arr[i] > a && arr[i] < b){
            count++;
            str += arr[i]+" ";
        }
    }
    console.log(str+ "Total Number : "+count);
   
}
AbetweenB([3, 5, 20, 7, 8] , 4, 9);


// 3rd sum
 function vowels(arr){
    count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i][0]==='a' || arr[i][0]==='A' || arr[i][0]==='e' || arr[i][0]==='E'|| arr[i][0]==='i' || arr[i][0]==='I' || arr[i][0]==='o' || arr[i][0]==='O' || arr[i][0]==='u' || arr[i][0]==='U'){
            count++;
        }
    }
        return count
}
let arr=["Orange","Apple","banana"]
console.log(vowels(arr))

// 4th sum
function Average(floatArr){
    let sum = 0;
    for(let i  = 0; i < floatArr.length; i++){
        sum += floatArr[i];
    }
    return Math.floor(sum/floatArr.length);
}
console.log(Average([2.5, 7.7, 20.2, 5.3]));

// practice sum
let Device = [
    { Name : "Laptop", price : 800},
    { Name : "Phone", price : 500},
    { Name : "Computer", price : 2000}
];

for(let i = Device.length-1; i >= 0; i--){
    console.log(Device[i].price);
    
}


 
  */

let a = 121;
/* let b = [...a.toString()].map(Number);
//console.log(b);
let c = [...b].reverse();
//console.log(c);
if(b.join() === c.join()){s
    console.log("Yes");
}
else{
    console.log("No");
}

 */
console.log(Number(a.toString().split("").reverse().join(""))==a?"Yes":"NO");
