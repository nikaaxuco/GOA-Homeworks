

let dayNumber = 3;
let dayName;

switch(dayNumber) {
    case 1:
        dayName = "ორშაბათი";
        break;
    case 2:
        dayName = "სამშაბათი";
        break;
    case 3:
        dayName = "ოთხშაბათი";
        break;
    case 4:
        dayName = "ხუთშაბათი";
        break;
    case 5:
        dayName = "პარასკევი";
        break;
    case 6:
        dayName = "შაბათი";
        break;
    case 7:
        dayName = "კვირა";
        break;
    default:
        dayName = "არასწორი დღე";
}

console.log(dayName);


let number = 8;
let result = number % 2 === 0 ? "ლუწი" : "კენტი";
console.log(result);


