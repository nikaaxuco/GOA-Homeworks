
let allValue = [
    42,
    "Hello",
    3.14,
    true,
    {
        name: "Giorgi",
        surname: "Giorgadze",
        age: 25,
        country: "Georgia",
        city: "Tbilisi"
    }
];

let personalInfo = `ჩემი სახელია ${allValue[4].name}, ჩემი გვარია ${allValue[4].surname}, ჩემი ასაკია ${allValue[4].age}, მე ვცხოვრობ ${allValue[4].country}-ში, ${allValue[4].city}-ში`;
console.log(personalInfo);


