function addToCart(event) {
    console.log("kekw");
    let inputQty = event.parentNode.getElementsByClassName('primary_input')[0].value;
    event.parentNode.getElementsByClassName('primary_input')[0].value = '';
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    let itemFound = false;
    if (cartItems) {
        for (let item of cartItems) {
            if (item.itemId === event.parentNode.getAttribute('data-id')) {
                item.quantity = inputQty ? item.quantity + parseInt(inputQty) : item.quantity + 1;
                itemFound = true;
            }
        }
        if (!itemFound) {
            localStorage.setItem('cart', JSON.stringify([
                ...cartItems,
                {
                    itemId: event.parentNode.getAttribute('data-id'),
                    itemName: event.parentNode.getAttribute('data-name'),
                    price: event.parentNode.getAttribute('data-price'),
                    quantity: inputQty ? parseInt(inputQty) : 1
                }
            ]))
        }
        else {
            localStorage.setItem('cart', JSON.stringify([
                ...cartItems
            ]))
        }
        itemFound = false;
    }
    else {
        localStorage.setItem('cart', JSON.stringify([
            {
                itemId: event.parentNode.getAttribute('data-id'),
                itemName: event.parentNode.getAttribute('data-name'),
                price: event.parentNode.getAttribute('data-price'),
                quantity: inputQty ? parseInt(inputQty) : 1
            }
        ]))
    }
}

function redirect() {
    window.location.replace("/");
}

