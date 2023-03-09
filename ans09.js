function printDivisibleByThree(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
        console.log(arr[i]);
      } else {
        continue;
      }
    }
  }
  
  // Example usage
  const numbers = [3, 5, 6, 9, 10, 12];
  printDivisibleByThree(numbers);
