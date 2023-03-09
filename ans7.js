function removeDuplicates(cart) {
    const newCart = [];
  
    cart.forEach((item) => {
      if (!newCart.includes(item)) {
        newCart.push(item);
      }
    });
  
    return newCart;
  }
  
  // Example usage
  const cart = ["item1", "item2", "item3", "item2", "item1"];
  console.log(removeDuplicates(cart)); // Outputs ["item1", "item2", "item3"]
  