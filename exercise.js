function withdraw(person, amount) {
    if (amount > person.balance) {
      console.log("Withdrawal cannot be processed.");
    } else {
      person.balance -= amount;
      console.log("Withdrawal successful. New balance:", person.balance);
    }
  }
  
  const person1 = {
    name: "Hyrjeta Topulli",
    balance: 100
  };
  
  withdraw(person1, 50);
  withdraw(person1, 100);
  withdraw(person1, 50);