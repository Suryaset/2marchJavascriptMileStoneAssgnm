const calculateTotalCost = (cart) => {
    let totalCost = 0;
    cart.forEach((item) => {
      totalCost += item.unitPrice * item.quantity;
    });
    return totalCost;
  };
  