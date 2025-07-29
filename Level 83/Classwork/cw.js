

const students = [
    { name: "Gio", grade: 85 },
    { name: "Lasha", grade: 92 },
    { name: "Sandro", grade: 78 },
    { name: "Ucha", grade: 95 },
    { name: "Nino", grade: 62 },
    { name: "Luka", grade: 88 },
    { name: "Mari", grade: 73 },
    { name: "Barbare", grade: 91 }
];


const allPassing = students.every(student => student.grade >= 70);


const hasFailing = students.some(student => student.grade < 65);


console.log("Student Names");
students.forEach(student => {
    console.log(`Student: ${student.name}`);
});


const honorRoll = [];
students.forEach(student => {
    if (student.grade >= 90) {
        honorRoll.push(student.name);
    }
});


console.log("Results");
console.log("All students passing:", allPassing);


console.log("Has failing students:", hasFailing);


console.log("Honor Roll:", honorRoll);



