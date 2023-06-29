// TODO: Exercise 4 - Shopping Cart

// Implement a simple shopping cart with the ability to add items, remove items, and calculate the total cost.

// When adding an item, if the item is already in the cart, increase the quantity; if not, add a new item.
// When removing, if the quantity is more than one, decrease the quantity; if it's one, remove the item completely.
// If the item isn't in the cart and you try to remove it, throw an error. This exercise will give you practice with
// array manipulation, objects, error handling, and control flow.

const SHOPPING_CART = [{ name: "ervilhas", qty: 2, price: 0.8 }];

// Each item should be an object with a name, quantity, and price. The cart should be an array of items.
const ITEM_TESTE = {
  name: "atum",
  qty: 4,
  price: 0.95,
};

// Add methods to add an item, remove an item, and calculate the total cost of items in the cart.
function addItem(product, cart) {
  //When adding an item, if the item is already in the cart,
  // increase the quantity; if not, add a new item.

  // check cart array
  for (const item of cart) {
    // compare the first key wich is name
    // if they are the same
    if (item["name"] === product["name"]) {
      // increment qty
      item.qty += product.qty;
      // update price
      item.price += product.price;
      console.log(item);
      return 0;
    }

    // if there is no item with that name add it.
    cart.push(product);
    return 0;
  }
}

function removeItem(product, qtyToRemove, cart) {
  //When removing, if the quantity is more than one, decrease the quantity; if it's one, remove the item completely.
  //If the item isn't in the cart and you try to remove it, throw an error.

  try {
    for (let i = 0; i < cart.length; i++) {
      let isFound = true;

      // if the product isn't in the shopping cart
      if (cart[i]["name"] === product["name"]) {
        // check the qty we want to remove
        if (cart[i]["qty"] < qtyToRemove) {
          delete cart[i];
          console.log(`${cart[i].name} foi removido do carrinho.`);
          return 0;
        } else if (cart[i]["qty"] > qtyToRemove) {
          cart[i]["qty"] -= qtyToRemove;
          return 0;
        }

        if (i === cart.length - 1) {
          // we reach the end of the loop lets check the found value
          if (!isFound) {
            throw new Error("Não existe esse produto no carrinho.");
          }
        }
      }
    }

    // item["qty"] -= qtyToRemove;
  } catch (e) {
    console.log(e.message);
  }
}

function getTotalCost(shoppingCart) {}

// TESTING AREA //
/////////////////7
addItem(ITEM_TESTE, SHOPPING_CART);
removeItem(ITEM_TESTE, 10, SHOPPING_CART);
//addItem(ITEM_TESTE, SHOPPING_CART);
