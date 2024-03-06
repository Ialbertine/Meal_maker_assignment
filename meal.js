// We’ll hold the meal, price, and their respective getters and setters in an object named menu.
// Create an empty menu object
const menu = {};

menu._meal = '';

menu._price = 0;

menu._meal = 'french flies'; 
menu._price = 'Free'; 
for (const key in menu) {
    console.log(key + ': ' + menu[key]);
}

//  add meal setter
Object.defineProperty(menu, 'meal', {
  set: function (mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    }
  },
});

// Step 6: Add an if statement to the meal setter
Object.defineProperty(menu, 'price', {
  set: function (priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    }
  },
});

// Step 8: Use the setter methods
menu.meal = 'Spaghetti';
menu.price = 8.99;

// Console.log and for in loop to check setter functionality
for (const key in menu) {
    console.log(key + ': ' + menu[key]);
}


// Step 9: Create a todaysSpecial getter method
Object.defineProperty(menu, 'todaysSpecial', {
  get: function () {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  },
});

// Step 11: Use the getter method to log Today's Special
console.log(menu.todaysSpecial);
