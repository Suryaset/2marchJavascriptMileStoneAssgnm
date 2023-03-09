const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return parseFloat(discountPercentage.toFixed(2)); // round off to two decimal places
  };
  console.log(calculateDiscountPercentage(300,285))