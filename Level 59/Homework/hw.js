
function financialPlanning(age, gender, income) {
    if (age >= 18) {
        if (gender === "female") {
            if (income > 5000) {
                console.log("თქვენი ფინანსური მგომარეობა უზრუნველყოფილია");
            } else if (income > 3000 && income <= 5000) {
                console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
            } else {
                console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            }
        } else if (gender === "male") {
            if (income > 6000) {
                console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
            } else if (income > 4000 && income <= 6000) {
                console.log("შემოსავალი სტაბილურია");
            } else {
                console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
            }
        }
    } else {
        console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
    }
}
