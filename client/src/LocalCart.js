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
  let maybeCart = getLocalCart();
  if (!maybeCart) {
    return null;
  }
  let cart = JSON.parse(maybeCart);
  if (cart.items[item]) {
    cart.items[item] += quantity;
  } else {
    cart.items[item] = quantity;
  }
  localStorage.setItem("couvertown-cart", JSON.stringify(cart));
  return cart;
}

export function removeFromLocalCart(item) {
  let cart = getLocalCart();
  if (cart && cart.items[item]) {
    delete cart.items[item];
    localStorage.setItem("couvertown-cart", cart);
  }
}
