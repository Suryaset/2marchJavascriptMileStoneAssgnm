function calculateBill(costPerDish, numberOfPeople) {
    // Calculate the total bill
    const totalBill = costPerDish * numberOfPeople;
    
    // Calculate the bill to be paid by each person
    const billPerPerson = totalBill / numberOfPeople;
    
    // Return an object containing the total bill and bill per person
    return {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  }
  const result = calculateBill(100, 5);
  console.log(result.totalBill);       // Output: 500
  console.log(result.billPerPerson);   // Output: 100
    