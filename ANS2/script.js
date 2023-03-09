


function calculate() {
    let op = document.getElementById("operator").value;
    let numOne = document.getElementById("numone").value;
    let numTwo = document.getElementById("numtwo").value;
    let ans = document.getElementById("answer");
    let result = 0;
    switch (op){
        case "*":
            result = Number(numOne) * Number(numTwo);
            
            alert(`The result of multiply is ${result}`);
            return true;
        
        case '/':
            result = Number(numOne) / Number(numTwo);
            alert(`The result of divide is ${result}`);
            return true;

        case '+':
            result = Number(numOne) + Number(numTwo);
            alert(`The result of plus is ${result}`);
            return true;

        case '-':
            result = Number(numOne) - Number(numTwo);
            alert(`The result of subtract is ${result}`);

            return true;

        default:
            result = "Invalid operator";
            alert(`${result}`);
            return false;
            
    }

    


}

