
// const prompt = require("prompt-sync")({sigint:true});
let color1 = prompt("color1: ");
let color2 = prompt("color2: ");


function mixColors(color1, color2) {
    switch(color1.toLowerCase()) {
      case "red":
        switch(color2.toLowerCase()) {
          case "blue":
            return "purple";
          case "yellow":
            return "orange";
          default:
            return "invalid color combination";
        }
      case "blue":
        switch(color2.toLowerCase()) {
          case "red":
            return "purple";
          case "yellow":
            return "green";
          default:
            return "invalid color combination";
        }
      case "yellow":
        switch(color2.toLowerCase()) {
          case "red":
            return "orange";
          case "blue":
            return "green";
          default:
            return "invalid color combination";
        }
      default:
        return "invalid color combination";
    }
  }
  
  // example usage
  console.log(mixColors(color1,color2)); 

  