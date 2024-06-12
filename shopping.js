let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

shoppingList[shoppingList.length] = 'fruit loops';

shoppingList[shoppingList.indexOf('coffee')] = 'fair trade coffee';
shoppingList[shoppingList.indexOf('chips')] = 'rice';
shoppingList[shoppingList.indexOf('salsa')] = 'beans';

let shoppingCart = [];

shoppingCart[shoppingCart.length] = shoppingList.pop();

shoppingCart[shoppingCart.length] = shoppingList.shift();

while(shoppingList.length > 0) {
    shoppingCart[shoppingCart.length] = shoppingList.shift();
  }

shoppingCart.sort();
shoppin.reverse();

console.log(shoppingCart.join(', '));