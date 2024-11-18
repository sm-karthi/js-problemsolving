// 1. Given an array of strings, return the string which has maximum 'a' character present in it.  eg = ["apple", "appeal", "after", "banish"] output is appeal as it has 2 a's in it

function aSum(eg){
let str = 0;
let a = ""
for(let i = 0; i < eg.length; i++){
    let count = 0;
    for(let j = 0; j < eg[i].length; j++){
        if(eg[i][j] === "a"){
            count++;  
        }
    }
    if(str < count){
        a = eg[i];
        str = count;    
    }
}
return a;
}
console.log(aSum(["apple", "appeal", "after", "banish"]));

// 2. Traverse the array and return the index of the first negative number encountered.

function firstNegative(arr){
    let str = "";
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            str = i;
            break;
        }
    }
    console.log("First negative number index : "+str);
}
firstNegative([23, 45, 4, 89, -90, 230]);


// 3. Given array two arrays student names and scores, return the student name who has the maximum score eg names=["sanjay", "priya", "ramesh", "sanjana"], scores = [88, 45, 71, 91] Answer sanjana

function maximumScore(names, scores){
    let max = scores[0];
    let name = "";
    for(let i = 0; i < scores.length; i++){
        if(max < scores[i]){
            max = scores[i];
            name = names[i];
        }
    }
    return name;
}
console.log(maximumScore(["sanjay", "priya", "ramesh", "sanjana"], [88, 45, 71, 91]));