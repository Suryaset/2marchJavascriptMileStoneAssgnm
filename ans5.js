function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  function checkName(name) {
    return name.charAt(0) === name.charAt(0).toLowerCase()
      ? capitalizeName(name)
      : name;
  }
  
  // Example usage
  console.log(checkName("manish")); // Outputs "John"
  console.log(checkName("Pawan")); // Outputs "Alice"
  