const addButton = document.getElementById("add");
const newInput = document.getElementById("name");
const tableBody = document.querySelector("#tableName tbody");

function addNameTable(name) {
    const newRow = document.createElement('tr');

    const newRo = document.createElement('td');
    newRo.textContent = name;

    newRow.appendChild(newRo);

    tableBody.appendChild(newRow);
}
form.addEventListener('submit', function(event) {
    
    event.preventDefault();
    let nameInput;
    const nameValue = nameInput.value;

    
    addNameTable(nameValue);

    
    nameInput.value = '';
});