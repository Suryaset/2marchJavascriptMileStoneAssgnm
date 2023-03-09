function countVowels(name) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
  
    for (let i = 0; i < name.length; i++) {
      if (vowels.includes(name[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage
  console.log(countVowels("Asha")); // Outputs 3
  console.log(countVowels("Birendra")); // Outputs 1
  