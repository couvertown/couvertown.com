import uuid from "uuid/v4";

export function genCartId() {
  return uuid();
}

export function getLocalCart() {
  if (!localStorage) {
    console.log("browser does not support local storage.");
    return null;
  }

  const maybeCart = localStorage.getItem("couvertown-cart");
  if (maybeCart) {
    let cart = JSON.parse(maybeCart);
    console.log("found cart with id " + cart.id);
    return cart;
  }

  let cart = {
    id: genCartId(),
    items: {}
  };
  console.log("initialised cart with id " + cart.id);
  localStorage.setItem("couvertown-cart", JSON.stringify(cart));
  return cart;
}

export function addToLocalCart(item, quantity) {
  let cart = getLocalCart();
  if (!cart) {
    return null;
  }
  if (cart.items[item]) {
    cart.items[item] += quantity;
  } else {
    cart.items[item] = quantity;
  }
  localStorage.setItem("couvertown-cart", JSON.stringify(cart));
  return cart;
}

export function getLocalCartCount(cart) {
  if (!cart) {
    return 0;
  }
  let count = 0;
  Object.keys(cart.items).forEach((key) => {
    if (cart.items.hasOwnProperty(key)) {
      count += cart.items[key];
    }
  });
  return count;
}

export function removeFromLocalCart(item) {
  let cart = getLocalCart();
  if (cart && cart.items[item]) {
    delete cart.items[item];
    localStorage.setItem("couvertown-cart", cart);
  }
}
