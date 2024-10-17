const form=document.getElementsByTagName("form");
const add=document.getElementById("add");
const modify=document.getElementById("modify");
const remove=document.getElementById("remove");


add.addEventListener("click", (event) => {
    event.preventDefault();  
    const name5= document.getElementById('name').value;
    const name = document.getElementById('name').value.split(" ").join("");
    const age=document.getElementById("age").value;
    const subject=document.getElementById("subject").value;

    if(document.getElementsByClassName(name).length==0){
        const name_node = document.createElement("li");
        const name1 = document.createTextNode(name5);
        name_node.appendChild(name1);
        name_node.setAttribute("class",`${name}`)
        document.getElementById("nameList").appendChild(name_node);
        
        const age_node = document.createElement("li");
        const age1 = document.createTextNode(age);
        age_node.appendChild(age1);
        age_node.setAttribute("class",`${name}`)
        document.getElementById("ageList").appendChild(age_node);
        
        const sub_node = document.createElement("li");
        const sub1 = document.createTextNode(subject);
        sub_node.setAttribute("class",`${name}`)
        sub_node.appendChild(sub1);
        document.getElementById("subjectList").appendChild(sub_node);
    }
    else{
        alert("user already exist");
    }
});




remove.addEventListener("click", (event) => {
    event.preventDefault();  

    const name = document.getElementById('name').value.split(" ").join("");
    if(!document.getElementsByClassName(name).length<1){
    const name_elements = document.getElementsByClassName(`${name}`);
    while (name_elements.length > 0) {
        name_elements[0].parentNode.removeChild(name_elements[0]);
    }
    }
    else{
        alert("There is no user in this name")

    }
});



modify.addEventListener("click", (event) => {
    event.preventDefault(); 


        const name = document.getElementById('name').value.split(" ").join("");
        const age = document.getElementById("age").value;
        const subject = document.getElementById("subject").value;
    
    
        const age_elements = document.getElementById("ageList").getElementsByClassName(name);
        if (age_elements.length > 0) {
            age_elements[0].textContent = age;  
        }
    
        const sub_elements = document.getElementById("subjectList").getElementsByClassName(name);
        if (sub_elements.length > 0) {
            sub_elements[0].textContent = subject;  
        }
    
    
});