
let password = 'Group 55 is best';
let attempts = 3;

function checkPassword() {
    while (attempts > 0) {
        let userInput = prompt('შეიყვანეთ პაროლი:');
        
        if (userInput === password) {
            alert('თქვენი შეყვანილი პაროლი სწორია');
            return;
        } else {
            attempts--;
            if (attempts > 0) {
                alert(`პაროლი არასწორია. დაგრჩათ ${attempts} ცდა`);
            }
        }
    }
    alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
}

checkPassword();



