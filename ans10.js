function doubleCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }
  
  // Example usage
  const cartQuantities = [1, 2, 3, 4];
  const newCartQuantities = doubleCartQuantities(cartQuantities);
  console.log(newCartQuantities);
  // Outputs: [2, 4, 6, 8]
  