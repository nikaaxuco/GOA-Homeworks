

function checkWeather(number) {
    switch(number) {
        case 1:
            return "მზიანი";
        case 2:
            return "წვიმიანი";
        case 3:
            return "მოღრუბლული";
        case 4:
            return "ქარიანი";
        default:
            return "არ არის დადგენილი";
    }
}


function checkMonth(monthNumber) {
    let month;
    let halfYear;
    
    switch(monthNumber) {
        case 1:
            month = "იანვარი";
            break;
        case 2:
            month = "თებერვალი";
            break;
        case 3:
            month = "მარტი";
            break;
        case 4:
            month = "აპრილი";
            break;
        case 5:
            month = "მაისი";
            break;
        case 6:
            month = "ივნისი";
            break;
        case 7:
            month = "ივლისი";
            break;
        case 8:
            month = "აგვისტო";
            break;
        case 9:
            month = "სექტემბერი";
            break;
        case 10:
            month = "ოქტომბერი";
            break;
        case 11:
            month = "ნოემბერი";
            break;
        case 12:
            month = "დეკემბერი";
            break;
        default:
            month = "არასწორი თვე";
    }
    
    halfYear = monthNumber <= 6 ? "პირველი ნახევარი" : "მეორე ნახევარი";
    
    return `${month}, ${halfYear}`;
}
