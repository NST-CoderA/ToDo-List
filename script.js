let items = [];

const itemsDiv = document.getElementById("items")
const input = document.getElementById("iteminput")
const storageKey = "items";

function renderItems(){
    itemsDiv.innerHTML = null;

    for (const [idx , item] of Object.entries(items)){
        const container = document.createElement("div");
        container.style.marginTop = "10px";

        const checkbox = document.createElement("input");
        checkbox.style.display = "inline";
        checkbox.style.width = "20px";
        checkbox.style.height = "15px";
        checkbox.style.marginRight = "10px";
        checkbox.type = "checkbox";
        


        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.style.fontSize = "20px";
        text.style.color = "red"
        text.textContent = item;

        
        const button = document.createElement("button")
        button.textContent = "Delete"
        button.style.width = "60px"
        button.style.height = "25px"
        button.onclick = () => removeItem(idx)
        // Wrapper syntax
        
        container.appendChild(checkbox)
        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container);
    };
}

function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems)
        // parse will convert it to an object
    renderItems()
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey , stringItems)
}

function addItem(){
    const value = input.value;
    if(!value){
        alert("You cannot add an empty item")
        return 
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(idx){
    items.splice(idx , 1)
    renderItems()
    saveItems()
}

document.addEventListener("DOMContentLoaded" , loadItems)