// 1sd sum
/* function  sumNumbers(n){
    let i=1;
    let sum=0;
    while (i <= n){
        sum +=i;
        i++;
    }
    return sum;
}
let c=sumNumbers(5);
console.log(c);

// 2nd sum

function calculateFactorial(n){
    let fact=1;
    while(n > 0){
        fact *= n;
        n--;
    }
    return fact;
}
console.log(calculateFactorial(5));

// 3rd sum

function printEvenNumbers(n){
    let a=1;
    while(a<=n){
        if (a % 2 == 0) {
            
            console.log(a);
        }
        a++;
    }
}
printEvenNumbers(20);

// 4th sum

function sumNumbers(n) {
    let sum = 0;
    let i = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
 let d= sumNumbers(5);
  console.log(d);
 */

  // for loop
  // 1st sum

  /* function  sumNumbers(n){
    let result=0;
    for(let start=1; start <= n; start++){
        result += start;
    }
    return result;
  }
  console.log(sumNumbers(5));

  // 2nd sum

  function calculateFactorial(n){
    let fact=1;
    for(let a=0; n > a; n--){
        fact *= n;
    }
    return fact;
}
console.log(calculateFactorial(5));

// 3rd sum

function printEvenNumbers(n){
    for(let a=2; a <=n; a+=2){
      console.log(a);
    }
    }
printEvenNumbers(10);

 */
// moodle practice
// 1st sum
/* let n=5;
let count = 0;
for(let i=1;  count < n; i+=2){
     console.log(i);
     count++;
    }
 */
// 2nd sum
/* let n = 5;
for(let i=1; i <= n; i++){
    console.log(i*3);
}  */

    // for loop pratcice in moodle

    /* let n = 3; 
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += 5 * i; 
}
console.log(sum);

let N = 5;
for(let i = 1; i <= N; i++){
    console.log(N);
}


let b=5;
for(let a=1; a <= b; a++){
   if(a % 2 ==0){
    console.log(a);
   }
} */
/* let multiLineMessage = `karthikeyan 
kkarthikeyan.
karthikeyan
karthikeyan.`;

console.log(multiLineMessage);
 */


/* function checkWord(str){
    let a = "Javascript";
    return a;
}
let b=checkWord();
console.log(b.includes("java")); */

/* function checkWord(str) {
    return str.includes("JavaScript");
  }
  console.log(checkWord("Java")); */

  /* let text = "JavaScript is Awesome!";
  console.log(text.toLowerCase());
  console.log(text.slice(13,22))
  console.log(text.replace("Awesome!" , "cool")); */

  /* let a = "Suprasanna";
  let b = a.slice(2 , 5);
  console.log(b); */

  /* function removelast2chars(str){
    str=str.slice(0,-2);
    return str;
  }
  console.log(removelast2chars("Hello world!")); */

  // 1st sum

  /* function classifyNumber(n){
    if(n % 3 == 0 && n % 5 == 0){
        return "Divisible by both 3 and 5";
    }
    else if(n % 3 == 0){
        return "Divisible by 3";
    }
    else if(n % 5 == 0){
        return "Divisible by 5";
    }
    else {
        return "Not divisible by 3 or 5";
    }
  }
  let a = classifyNumber(7);
  console.log(a); */

  // 2nd sum

  /* function getDayName(n){
    if(n == 1){
        return "Sunday";
    }
    else if(n == 2){
        return "Monday";
    }
    else if(n == 3){
        return "Tuesday";
    }   
    else if(n == 4){
        return "Wednesday";
    }
    else if(n == 5){
        return "Thursday";
    }
    else if(n == 6){
        return "friday";
    }
    else if(n == 7){
        return "Saturday";
    }
  }
  let b = getDayName(7);
  console.log(b); */

// 3rd sum
/* function printMultiplicationTable(n){
    let r = 6;
    let a = 1;
    for(let i = r; i >= a; i--){
        console.log(n +" * "+ i +" = "+ n * i);
    }
}
printMultiplicationTable(5); */

/* let a = 0;
for (let i = 10; i >= a; i--){
    if(i == 2){
         console.log("get");
    }
    else if(i == 1){
        console.log("sad");
    }
    else if(i == 0){
        console.log("go");
    }
    else{
        console.log(i);
    }
} */

/* let a = 10;
n=4;
for (let i = 1; i <= a; i=i+n){
    console.log(i); 
}*/
    /* let n=5;
    let count = 0;
    for(let i=1;  count < n; i+=2){
         console.log(i*i);
         count++;
    } */

/* let n = 10;
for (let i = 1; i <= n; i++){
    if(i % 2 == 0){
        console.log(i);
        
        
    }
} */

    console.log("================ 1st sum================");
     // 1st sum
let count = 10;
let a = 1;
while(a <= count){
    console.log(a +" lap completed");
    a++; 
}

console.log("================ 2nd sum================");
    //n 2nd sum
    function battryLow(num){
    let b = 20;
    while(num > b){
        console.log(num+"%");
        num = num -5;
    }
    console.log("batterylow");
}
battryLow(100);

console.log("================ 3rd sum================");

    // 3rd sum
    let x_possition = 0;
    let y_possition = 0;
    function diraction_of_robot(direction){
          switch(direction){
            case "North" :
                y_possition += 1;
                break;
            case "South" :
                y_possition -=1;
                break;
            case "East" :
                x_possition +=1;
                break;
            case "west" :
                x_possition -=1;
                break;
          }
          console.log(
            `The robot moved "${direction}" and new direction "(${x_possition}, ${y_possition})"`          )
    }
    diraction_of_robot("North"); 

    console.log("================ 4th sum================");

    // 4th sum
     
    function airplane_altitude(number){
        for (let i = number; i > 0; i = i - 10){
            console.log("Flight "+i+" ft");
        }
        console.log("Flight arrived");
    }
    airplane_altitude(1000);

    console.log("================ 5th sum================");

    // 5th sum

    function flight_Runway(city){
        switch(city){
            case "Thoothukudi" :
                console.log("Runway : 1");
                break;
            case "Nellai" :
                console.log("Runway : 2");
                break;
            case "Ramanathapuram" :
                console.log("Runway : 3");
                break;
            case "Thenkasi" :
                console.log("Runway : 4");
                break;
        }
    }
    flight_Runway("Thoothukudi");

console.log("================ 6th sum================");

    // 6th sum
    function airplane(numbers){
        for (let i = 10; i <= numbers; i = i+10){
            console.log("Flight "+i+" ft");
        }
    }
    airplane(1000);