const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
const payButton = document.getElementById("payButton");

const itemsArea = document.getElementById("itemsArea");

let amount = document.getElementById("productAmount").value;
let total = document.getElementById("totalAmount").value;

let productArray = [

    {
        "name": "leche",
        "weightVol": 1,
        "units": "l",
        "price": 3100
    },
    {
        "name": "huevos",
        "weightVol": "24",
        "units": "u",
        "price": 9800
    },
    {
        "name": "bananos",
        "weightVol" : "15",
        "units": "g",
        "price": 4200 
    }

];

addButton.addEventListener("click", (ev) => {



});

removeButton.addEventListener("click", (ev) => {



});

payButton.addEventListener("click", (ev) => {



});

productArray.forEach((product) => {
    console.log(product.name);

    if(product.units == "u"){
        console.log(product.weightVol);
    }
    else{
        console.log(product.weightVol + product.units);
    }

    let productDiv = document.createElement("div");

    productDiv.innerHTML = `
    
    <h2>${product.name}</h2>
    <h3>${product.price}$</h3>
    <h4>${product.weightVol}</h4>

    `;

    itemsArea.appendChild(productDiv);
});

