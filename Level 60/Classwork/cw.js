  let selection = prompt("enter a number (1-3) to select your coffee:");
  let coffee;

  switch (selection) {
      case "1":
          coffee = "Americano";
          break;
      case "2":
          coffee = "Espresso";
          break;
      case "3":
          coffee = "Cappuccino";
          break;
      default:
          coffee = "Unknown";
  }

  console.log("Your coffee is: " + coffee);


