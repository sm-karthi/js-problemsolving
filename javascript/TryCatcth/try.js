try{
    console.log("Fist line");
    console.log(gCdk(23, 34));
    console.log("Last line");
}
catch(err) {
    console.log(err.message);
}
finally{
    console.log("Code complete");
}

function gCd(a, b){
    let str = "";
    let c = a > b ? a : b;
    for(let i = 1; i <= c; i++){
        if(a % i === 0 && b % i === 0){
            str = i;
        }
    }
    return str;
}
