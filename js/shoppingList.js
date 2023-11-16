function createRowElements(){
    return{
        shoppingCart: document.getElementsByTagName("tbody")[0],
        newRow: document.createElement("tr"),
        newItem: document.createElement("td"),
        itemPrice:document.createElement("td"),
        removeButton: document.createElement("button")
    }
}

function getUserInput(){
    item = document.getElementById("item");
    price = document.getElementById("price");
    return{
        item, price
    }
}

function addToCart(){
    
}
