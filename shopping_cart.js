// TODO: Exercise 4 - Shopping Cart

// Implement a simple shopping cart with the ability to add items, remove items, and calculate the total cost.
// Each item should be an object with a name, quantity, and price. The cart should be an array of items.
// Add methods to add an item, remove an item, and calculate the total cost of items in the cart.
// When adding an item, if the item is already in the cart, increase the quantity; if not, add a new item.
// When removing, if the quantity is more than one, decrease the quantity; if it's one, remove the item completely.
// If the item isn't in the cart and you try to remove it, throw an error. This exercise will give you practice with
// array manipulation, objects, error handling, and control flow.

function ShoppingCart() {
  cart = [],

  addItem: function (name, qty, price) {
    if (this.cart.length == 0) {
      this.cart.push({ name: this.name, qty: this.qty, price: this.price });
    } else {
      // find if the item is already in the cart
      let isFound = this.cart.some((elem) => {
        if (elem.name == this.name) {
          return true;
        } else return false;
      });
      //if the item is already in the cart, increase the quantity
      if (isFound) {
        this.cart.forEach((element) => {
          if (element.name === this.name) {
            element.qty += this.qty;
          }
        });
      }
      //if not, add a new item
    }
  };
}

let myCart = new ShoppingCart();

myCart.addItem("ervilhas", 2, 0.86);
console.log(myCart.cart.length);
