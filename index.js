var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = { [item]: Math.floor((Math.random() * 100) + 1) };
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var cartContents = 'In your cart, you have ';
    for (let i = 0; i <= cart.length - 1; i++) {
      let item = Object.keys(cart[i]);
      let itemName = item[0];
      let itemPrice = cart[i][itemName];
      cartContents += `${itemName} at $${itemPrice}`;
      
      if (cart.length == 1 || i + 1 == cart.length) {
        cartContents += '.';
      }
      if ( cart.length == 2 && i === 0) {
        cartContents += ' and ';
      }
      if (cart.length >= 3 && i + 1 == cart.length - 1)  {
        cartContents += ', and ';
      }
      if (cart.length >= 3 && i + 1 < cart.length - 1) {
        cartContents += ", ";
      }
    }
    console.log(cartContents);
  }
}

function total() {
  let total = 0;
  for (let i = 0; i <= cart.length - 1; i++) {
    let item = Object.keys(cart[i]);
    let itemPrice = cart[i][item];
    total = total + itemPrice;  
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i <= cart.length - 1; i++) {
    if (cart[i].hasOwnProperty(item)) {
      if (i === 0) {
        cart.shift();
      }
      if (i == cart.length -1)
      [...cart.slice(0, 2), ...cart.slice(3)]
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return; 
}

function placeOrder(cardNumber) {
  // write your code here
}
