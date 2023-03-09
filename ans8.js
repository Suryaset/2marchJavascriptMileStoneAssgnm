function printInvertedRightTriangle(i) {
    for (let row = i; row > 0; row--) {
      let pattern = "";
  
      for (let j = 0; j < row; j++) {
        pattern += "*";
      }
  
      console.log(pattern);
    }
  }
  
  // Example usage
  printInvertedRightTriangle(5);

  