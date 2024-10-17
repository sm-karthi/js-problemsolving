
    function change(){
            let color = document.getElementById("color");
            color.textContent = "Gokulavasan";
            let colors = document.getElementById("colors");
            colors.style.color = "blue";
            color.style.color = "red";
            let crate = document.getElementsByTagName("body");
            let para = document.createElement("p");
            para.textContent = "This  is a DOM";    
            document.body.appendChild(para);
        }

// Add new elements with creatElement and appedChild 

let container = document.querySelector(".container");
let addBoxButton = document.getElementById("addBox");
addBoxButton.addEventListener("click",() => {
    let newBox = document.createElement("div");
    newBox.textContent = "New Box";
    newBox.classList.add("box");
    container.appendChild(newBox);                                                                                                          
});

// Remove elements with removeChild

let removeBoxButton = document.getElementById("removeBox");
removeBoxButton.addEventListener("click", () => {
    let lastBox = document.querySelector(".box:last-child");
    if(lastBox){
        container.removeChild(lastBox);
    }
    else {
        alert("No boxes left to remove!");
    }
});
        