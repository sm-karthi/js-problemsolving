// 1st sum
function evenNumbers(num){
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if(i % 2 ==0){
            sum +=i;
            
        }
    }
    return sum;
}
console.log(evenNumbers(20));

// 2nd sum
function threeMultiple(n) {
    for(let i = 1; i <=n; i++){
        if(i % 3 == 0){
            console.log(i);
            
        }
    }
}
threeMultiple(15);

// 3rd sum
function cricketMatch(teamScore, targetScore, oversLeft) {
    if (teamScore >= targetScore) {
        console.log("Team wins by DL method");
    }
    else if(teamScore < targetScore && oversLeft > 0){
        console.log("Match to be continued");        
    }
    else if(teamScore < targetScore && oversLeft === 0){
        console.log("Team loses by DL method");
        
    }
}

cricketMatch(202,200,0);
cricketMatch(192,200,2);
cricketMatch(198,200,0);