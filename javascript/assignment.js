// 1st sum
calculateArea(5);
greetUser("John");
function calculateArea(radius) {
    const PI = 3.14;
    let area = Math.floor(Math.PI * radius * radius);
    console.log(area);
}
function greetUser(userName) {
    console.log(userName);
}

// 2nd sum
 let count = 1;
let num = 100;
while (count <= num) {
    console.log("Counting down: " + count);
    count++; 
}

// 3rd sum
let temperature = 10;
if (temperature === 20) {
    console.log("It's cold outside.");
} else {
    console.log("It's warm outside.");
}

// 4th sum
checkNumber(-5);
checkNumber(0);
checkNumber(10,20);
function checkNumber(num) {
  if (num > 0){
    console.log("Positive");
  }
  else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

// 5th sum
function sumNumbers(n){
    let i = 1;
    let sum = 0;
    while (i <= n) {
        sum +=i;
        i++;        
    }
    return sum;
}
console.log(sumNumbers(5));

// 6th sum
function calculateFactorial(n){
    let i = 1;
    let sum = 1;
    while (i <=n) {
        sum *= i;
        i ++;
    }
    return sum;
}
console.log(calculateFactorial(5));

// 7th sum
function printEvenNumbers(n) {
    let i = 1;
    while (i <= n) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}
printEvenNumbers(10);

// 8th sum
function sumNumbers(n) {
    let sum = 0;
    let i = 1;  
    while (i <= n) {
      sum += i;
      i++;
    }  
    return sum;
  }
  console.log(sumNumbers(5));

  // 9th sum
  function classifyNumber(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "Divisible by both 3 and 5";
    }
    else if(number % 3 === 0){
        return "Divisible by 3";
    }
    else if(number % 5 === 0){
        return "Divisible by 5";
    }
    else {
        return "Not divisible by 3 or 5";
    }
  }
  console.log(classifyNumber(15));

  // 10th sum
  function getDayName(n){
    if(n === 1){
        return "Sunday";
    }
    else if(n === 2){
        return "Monday";
    }
    else if(n === 3){
        return "Tuesday";
    }
    else if(n === 4){
        return "Wednesday";
    }
    else if(n === 5){
        return "Thursday";
    }
    else if(n === 6){
        return "Friday";
    }
    else if(n === 7){
        return "Saturday";
    }
  }
  console.log(getDayName(1));
  
  // 11th sum
  function printMultiplicationTable(n , r){
    for(let i = r; i >=1; i--){
        console.log("n * "+i+" = "+n*i);        
    }
  }
  printMultiplicationTable(5 , 6);

  // 12th sum
  function laps(count) {  
  let a = 1;
  while (a <= count) {
    console.log(a+" Lab completed");
    a++;
  }
}
laps(10);

// 13th sum
function batteryLow(num){
    let b = 20;
    while(num > b){
        console.log(num+"%");
        num = num -5;
    }
    console.log("batterylow");
}
batteryLow(100);

// 14th sum
let x_position = 0;
let y_position = 0;
function direction_of_robot(direction){
      switch(direction){
        case "North" :
            y_position += 1;
            break;
        case "South" :
            y_position -=1;
            break;
        case "East" :
            x_position +=1;
            break;
        case "west" :
            x_position -=1;
            break;
      }
      console.log(
        `The robot moved "${direction}" and new direction "(${x_position}, ${y_position})"`);
}
direction_of_robot("East"); 

// 15th sum
function airplaneAltitude(number){
    for (let i = number; i > 0; i = i - 10){
        console.log("Flight "+i+" ft");
    }
    console.log("Flight arrived");
}
airplaneAltitude(1000);

// 16th sum
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

// 17th sum
function airplane_altitude(altitude,interval){
    altitude_interval = altitude/interval;
    for (let i = 1; i <= interval; i++){
        let currentAltiude = altitude_interval * i;
        console.log(`Altitude = ${currentAltiude} ft`);
        
    }
}
airplane_altitude(1000,10);

// Arrays
// 1st sum
function train_time(train_departures){
        let early = train_departures[0];
       for(let i = 0; i < train_departures.length; i++){
        if (train_departures[i]<early) {
            early=train_departures[i];
        }
       }
       return early;
    }
    let a=train_time([10, 15, 7, 20, 5]);
    console.log(a);

// 2nd sum
function seats_booking(seats) {
    let tickets_available = 0;
    for(let i = 0; i < seats.length; i++){
        if(seats[i] == 0){
            tickets_available++;
        }
    }
    return tickets_available;
}
console.log(seats_booking([1, 0, 1, 1, 0, 0, 1, 0]));

// 3rd sum
function highestNumber(solider){
    let highest = solider[0];
    for(let i = 0; i < solider.length; i++){       
        if(solider[i] > highest){                  
            highest = solider[i];
        }
    }
    return highest;
    
    }
console.log(highestNumber([120, 300, 250, 180, 150]));

// 4th sum
function Average(populations){
    let sum = 0;
    for (let i = 0; i < populations.length; i++){
        sum +=populations[i];
    }
    return sum/populations.length;
}
console.log(Average([50, 60, 70, 80, 90]));

// 5th sum
function Water(water_levels){
    let lowest = water_levels[0];
    for(let i = 0; i < water_levels.length; i++){
        if(water_levels[i] < lowest){
            lowest = water_levels[i];
        }
    }
    return lowest;
}
console.log(Water([30, 50, 20, 40, 60]));

// 6th sum
function festival(days_until_festival){
    let closest = days_until_festival[0];
    for(let i = 0; i < days_until_festival.length; i++){
        if(days_until_festival[i] < closest){
            closest = days_until_festival[i];
        }
    }
    return closest;
}
console.log(festival([30, 15, 45, 10, 25]));

// 7th sum
function same_time(landing_times){
    for(let i = 0; i < landing_times.length; i++){
        for(let j = i+1; j < landing_times.length; j++){
            if(landing_times[i] == landing_times[j]){
                return "Yes";
            }
        }
    }
    return "No";
}
console.log(same_time([12, 15, 12, 18, 20]));

// 8th sum
function temperature1(temperatures, limit){
    let degrees ;
    for(let i = 0; i < temperatures.length; i++){
        if(temperatures[i] > limit){
            degrees = temperatures[i];
        }
    }
    return degrees;
}
console.log(temperature1([75, 80, 72, 85, 90] , 80));

// 9th sum
function bus_Route(students_per_route, max_student){
    let bus = 0;
    let str = 0;
    for(let i = 0; i < students_per_route.length; i++){
        str +=students_per_route[i];
        bus = Math.round(str/max_student);
    } 
    return bus;
}
console.log(bus_Route([45, 55, 30, 60, 40], 50));

// 10th sum
function weekExpensesCalculate(weekExpenses){
    let sum = 0;
    for(let i = 0; i < weekExpenses.length; i++){
        sum += weekExpenses[i];
    }
    return sum;
}
console.log(weekExpensesCalculate([100, 70, 300, 150, 200, 550, 350]));

// 11th sum
function gradesCalculate(grade){
    let sum = 0;
    for(let i = 0; i < grade.length; i++){
        sum += grade[i];
    }
    sum = Math.floor(sum / grade.length);
    return sum; 
}
console.log(gradesCalculate([100, 80, 50, 70, 90]));

// 12th sum 
let ages = [12, 18, 25, 30, 16];
let eighteen = ages.filter(function(age) {
    return age >= 18;
});
console.log(eighteen);

// 13 sum
function integers(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            count++;
        }
    }
    return count;
}
console.log(integers([1, 2, 3, 4, 5, 6]));

// Array Methods and Objects
// 1st sum
let color = ["Red", "Green"];
color.push("Blue");
color.push("Yellow");
console.log(color);

// 2nd sum
let fruits = ["Apple", "Orange", "Banana", "Grapes", "Mango"];
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// 3rd sum
let sports = ["Cricket", "Kabaddi"];
sports.unshift("Chess", "Basketball", "Volleyball");
console.log(sports);

// 4th sum
let Devices = ["Laptop","Phone", "Computer"];
if(Devices.indexOf("Laptop") >= 0){
    console.log("Found");
}
else {
    console.log("Not Found");
}

// 5th sum
let language = "HTML-CSS-JavaScript";
let lan = language.split("-");
console.log(lan);

// 6th sum
let arr = [1, 2, 3, 4];
let blank =[];
let len=arr.length;
for(let i = 0; i < len ; i++){
    blank.push(arr.pop());
}
console.log("Reversed Array: "+blank);

// 7th sum
let fruits1 = ["Apple", "Orange", "Banana", "Grapes"];
let fruitsString = fruits1.join(",");
console.log(fruitsString);
 
// 8th sum
let car = {
    make : "China",
    model : "Suzuki",
    year : 2018,
}
console.log("Car model :"+car.model);

// 9th sum
let Array = [
    book1 = {
        title : "Financial Management",
        Author : "Dr. A. Murthy",
    },
    book2 = {
        title : "Night Smoke",
        Author : "Nora Roberts" ,
    }
];
console.log(Array[0].title);

// 10th sum
let cars = [
    { brand: "Tata", model: "Nano" },
    { brand: "Honda", model: "Civic" },
    { brand: "Suzuki", model: "Swift" },
    { brand: "Mahindra", model: "Thar" }
];
cars[0].year = 2015;
cars[1].year = 2022;
cars[2].year = 2019;
cars[3].year = 2023;
console.log(cars);

// 11th sum
let Device = [
    { Name : "Laptop", price : 800},
    { Name : "Phone", price : 500},
    { Name : "Computer", price : 2000}
];
let sum = 0;
for(let i = 0; i < Device.length; i++){
    sum +=Device[i].price;
}
console.log(sum);


// 12th sum
students = [
    { name: "Amar", grade: "A" },
    { name: "Akbar", grade: "B" },
    { name: "Anthony", grade: "A" },
    { name: "Gokul", grade: "B"},
    { name: "Karthi", grade: "D"}
  ];
  let arr5=[];
  for (let i = 0; i < students.length; i++){
    if(students[i].grade == "A"){
        arr5.push(students[i].name)
    }
  }
  console.log(arr5);
 
  //Real-world use-cases:
  // 1st sum
  function scores(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return Math.floor(sum/arr.length);
  }
  console.log(scores([95,80,80,80,100]));
  
// 2nd sum
function stuScores(arr){
    let highScore = Math.max(...arr);
    console.log(highScore);
}
stuScores([90,80,10,70,60,40,100]);

// 3rd sum
let decimalArr=[10, 7, 12];
let em_arr = [];
for(let i = 0; i < decimalArr.length; i++){
    em_arr.push(decimalArr[i].toString(2));
     

}

console.log(em_arr);

// 4th sum
let Array1 = [true, false, true];
let Array2 = [false, true, true];
let resultArr = [];
for(let i = 0; i < Array1.length; i++){
    resultArr.push(Array1[i] && Array2[i]);
}
console.log(resultArr);

// 5th sum
let oldPrice = [100, 250, 500, 700];
let newPrice = [120, 260, 550, 800];
for(let i = 0; i < oldPrice.length; i++){
    let percentageIncrease = ((newPrice[i] - oldPrice[i]) / oldPrice[i]) * 100;
    console.log(`Item ${i + 1}: ${percentageIncrease.toFixed(2)} % increase`);
    
}

// 6th sum
let set1 = [1, 2, 3, 4];
let set2 = [3, 4, 5, 6];
let UnionSet = [...new Set([...set1, ...set2])];

console.log(UnionSet);

// 7th sum
function findMode(arr){
    let maxCount = 0;
    let mode;
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }
        if(count > maxCount) { 
            maxCount=count;
            mode = arr[i];
        }
    }
    return mode;
}
console.log(findMode([4, 5, 6, 7, 4, 5, 6, 6, 5, 4, 6]));

// 8th sum
function time(taskTime){
    for(let i = 0; i < taskTime.length; i++){
        let hours = Math.floor(taskTime[i] / 60);
        let minutes = taskTime[i] % 60;
        taskTime[i] = { hours: hours, minutes: minutes };
    }
    return taskTime;
}
console.log(time([100, 300, 220, 340]));

// 9th sum
let Simple_Interest = [
    { principal : 10000, rateOfInterest : 5, noOfYears: 4},
    { principal : 12000, rateOfInterest : 4, noOfYears: 3},
    { principal : 14000, rateOfInterest : 5, noOfYears: 4},
    { principal : 16000, rateOfInterest : 4, noOfYears: 3},
    { principal : 18000, rateOfInterest : 5, noOfYears: 4},
    { principal : 20000, rateOfInterest : 4, noOfYears: 3},
    { principal : 22000, rateOfInterest : 5, noOfYears: 4},
    { principal : 24000, rateOfInterest : 4, noOfYears: 3},
    { principal : 26000, rateOfInterest : 5, noOfYears: 4},
    { principal : 28000, rateOfInterest : 4, noOfYears: 3},
    ];
    let empty = [];
    for(let i = 0; i < Simple_Interest.length; i++){
         empty.push(Simple_Interest[i].principal * Simple_Interest[i].rateOfInterest * Simple_Interest[i].noOfYears / 100); 
    }
    console.log(empty);
    
// 10th sum
students = [
    { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
    { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
    { subject1Marks: 70, subject2Marks: 90, subject3Marks: 90 },
    { subject1Marks: 90, subject2Marks: 80, subject3Marks: 55 },
    { subject1Marks: 80, subject2Marks: 100, subject3Marks: 75 },
    { subject1Marks: 95, subject2Marks: 70, subject3Marks: 60 },
    { subject1Marks: 30, subject2Marks: 85, subject3Marks: 40 },
    { subject1Marks: 100, subject2Marks: 40, subject3Marks: 85 },
    { subject1Marks: 80, subject2Marks: 75, subject3Marks: 80 },
    { subject1Marks: 60, subject2Marks: 30, subject3Marks: 45 }
    ];
    let newArr = [];
    for(let i = 0; i < students.length; i++){
        newArr.push(students[i].subject1Marks + students[i].subject2Marks + students[i].subject3Marks);
    }
    console.log(newArr);

    // 11th sum
    expenses = [
        { rent: 1000, groceries: 500, utilities: 200 },
        { rent: 800, groceries: 400, utilities: 150 },
        { rent: 2000, groceries: 600, utilities: 300 },
        { rent: 1500, groceries: 300, utilities: 350 },
        { rent: 1200, groceries: 550, utilities: 250 },
        { rent: 900, groceries: 480, utilities: 152 },
        { rent: 1300, groceries: 590, utilities: 280 },
        { rent: 180, groceries: 440, utilities: 190 },
        { rent: 1100, groceries: 290, utilities: 220 },
        { rent: 950, groceries: 470, utilities: 190 },
        ];
        let newArrr = [];
        for(let i = 0; i < expenses.length; i++){
            newArrr.push(expenses[i].rent + expenses[i].groceries + expenses[i].utilities);
        }
        console.log(newArrr);
