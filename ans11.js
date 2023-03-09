function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit;
  }
  
  // Example usage
  const celsiusTemp = 25;
  const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
  console.log(fahrenheitTemp);
  // Outputs: 77
  