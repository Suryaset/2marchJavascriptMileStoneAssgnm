function calculateRentalCost(days, carType) {
    let rentalCost = 0;
    switch (carType) {
      case "Economy":
        rentalCost = 4000;
        break;
      case "Midsize":
        rentalCost = 10000;
        break;
      case "Luxury":
        rentalCost = 20000;
        break;
      default:
        console.log("Invalid car type");
        return null;
    }
    return rentalCost * days;
  }
  
  // Example usage
  const daysRented = 5;
  const carType = "Midsize";
  const totalCost = calculateRentalCost(daysRented, carType);
  console.log(`The total cost for a ${carType} rental for ${daysRented} days is Rs. ${totalCost}.`);
  // Outputs: "The total cost for a Midsize rental for 5 days is Rs. 50000."
  