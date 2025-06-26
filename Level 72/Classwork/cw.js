

function calculateLove() {
    let name1 = prompt("Enter the first name:");
    let name2 = prompt("Enter the second name:");
    
    let lovePercentage = Math.floor(Math.random() * 101);
    
    alert(`The love percentage between ${name1} and ${name2} is ${lovePercentage}%!`);
}

calculateLove();



