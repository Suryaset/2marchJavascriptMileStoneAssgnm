// Define the customer object with a name and balance property
const customer = {
    name: "Ideal Corp.",
    balance: 1000
  };
  
  // Function to deposit an amount into the customer's account
  function deposit(amount) {
    customer.balance += amount;
    console.log(`Deposited ${amount} into ${customer.name}'s account`);
  }
  
  // Function to withdraw an amount from the customer's account
  function withdraw(amount) {
    if (amount > customer.balance) {
      console.log("Insufficient funds");
    } else {
      customer.balance -= amount;
      console.log(`Withdrew ${amount} from ${customer.name}'s account`);
    }
  }
  
  // Example usage
  console.log(`Initial balance for ${customer.name}: ${customer.balance}`);
  deposit(500);
  console.log(`New balance for ${customer.name}: ${customer.balance}`);
  withdraw(2000);
  console.log(`New balance for ${customer.name}: ${customer.balance}`);
  withdraw(500);
  console.log(`New balance for ${customer.name}: ${customer.balance}`);
  