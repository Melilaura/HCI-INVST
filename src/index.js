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
    },
    {
        "name": "azúcar",
        "weightVol": 1,
        "units": "kg",
        "price": 15000
    },
    {
        "name": "sal",
        "weightVol": 500,
        "units": "g",
        "price": 8000
    },
    {
        "name": "harina",
        "weightVol": 1,
        "units": "kg",
        "price": 11000
    }

];

let shoppingCart = [];

addButton.addEventListener("click", (ev) => {

    itemsArea.innerHTML = "";
    
    shoppingCart.push(productArray[Math.floor(Math.random() * productArray.length)])

    console.log(shoppingCart);

    reloadShoppingCart(shoppingCart);
    

});

removeButton.addEventListener("click", (ev) => {

    itemsArea.innerHTML = "";

    shoppingCart.pop();

    console.log(shoppingCart);

    reloadShoppingCart(shoppingCart);

});

payButton.addEventListener("click", (ev) => {



});

function reloadShoppingCart(shoppingCart){
    shoppingCart.forEach((product) => {
        console.log(product.name);
    
        if(product.units == "u"){
            console.log(product.weightVol);
        }
        else{
            console.log(product.weightVol + product.units);
        }
    
        let productDiv = document.createElement("div");
        productDiv.className = "productShow_div";
    
        productDiv.innerHTML = `
        
        <h2>${product.name}</h2>
        <h3>${product.price}$</h3>
        <h4>${product.weightVol}</h4>
    
        `;
    
        console.log(product.name);
    
        itemsArea.appendChild(productDiv);
    });
}

