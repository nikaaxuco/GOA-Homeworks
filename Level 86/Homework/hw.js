
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" },
    { id: 5, name: "Eve" }
];

const userWithId3 = users.find(user => user.id === 3);
console.log("User with ID 3:", userWithId3);

console.log("=== Task 2: Reversing an Array of Colors ===");

const colors = ["red", "blue", "green", "yellow", "purple"];
console.log("Original colors:", [colors]);

colors.reverse();
console.log("Reversed colors:", colors);



const productPrices = [29.99, 15.50, 89.99, 45.00, 12.99, 67.50];
console.log("Original prices:", [...productPrices]);

productPrices.sort((a, b) => b - a);
console.log("Sorted prices (descending):", productPrices);



const inputString = "JavaScript";
const characters = Array.from(inputString);
console.log("Original string:", inputString);
console.log("Characters array:", characters);



const data1 = [1, 2, 3, 4, 5];
const data2 = "This is a string";

const isData1Array = Array.isArray(data1);
const isData2Array = Array.isArray(data2);

console.log("data1:", data1);
console.log("Is data1 an array?", isData1Array);
console.log("data2:", data2);
console.log("Is data2 an array?", isData2Array);



const courses = [
    {
        id: 1,
        name: "JavaScript Fundamentals",
        instructor: "John Smith",
        credits: 3,
        students: [
            { id: 101, name: "Alice Johnson", grade: 85, attendance: 95 },
            { id: 102, name: "Bob Wilson", grade: 92, attendance: 88 },
            { id: 103, name: "Charlie Brown", grade: 78, attendance: 92 },
            { id: 104, name: "Diana Prince", grade: 96, attendance: 100 }
        ]
    },
    {
        id: 2,
        name: "Advanced React",
        instructor: "Sarah Davis",
        credits: 4,
        students: [
            { id: 105, name: "Eve Adams", grade: 89, attendance: 85 },
            { id: 106, name: "Frank Miller", grade: 94, attendance: 90 },
            { id: 107, name: "Grace Lee", grade: 87, attendance: 95 },
            { id: 108, name: "Henry Ford", grade: 91, attendance: 88 }
        ]
    },
    {
        id: 3,
        name: "Database Design",
        instructor: "Mike Johnson",
        credits: 3,
        students: [
            { id: 109, name: "Ivy Chen", grade: 93, attendance: 92 },
            { id: 110, name: "Jack Robinson", grade: 76, attendance: 80 },
            { id: 111, name: "Kate Williams", grade: 88, attendance: 94 },
            { id: 112, name: "Leo Martinez", grade: 90, attendance: 87 }
        ]
    }
];

console.log("Course Data:", courses);

const reactCourse = courses.find(course => course.name === "Advanced React");
console.log("1. Found React Course:", reactCourse);

const courseNames = courses.map(course => course.name);
console.log("2. All Course Names:", courseNames);

const highPerformingStudents = [];
courses.forEach(course => {
    const topStudents = course.students.filter(student => student.grade > 90);
    topStudents.forEach(student => {
        highPerformingStudents.push({
            ...student,
            courseName: course.name
        });
    });
});
console.log("3. Students with grades above 90:", highPerformingStudents);

const courseAverages = courses.map(course => {
    const totalGrades = course.students.reduce((sum, student) => sum + student.grade, 0);
    const averageGrade = totalGrades / course.students.length;
    return {
        courseName: course.name,
        averageGrade: Math.round(averageGrade * 100) / 100
    };
});
console.log("\n4. Average grades by course:", courseAverages);

const coursesByEnrollment = [...courses].sort((a, b) => b.students.length - a.students.length);
console.log("5. Courses sorted by enrollment (descending):");
coursesByEnrollment.forEach(course => {
    console.log(`   ${course.name}: ${course.students.length} students`);
});

let topStudent = null;
let highestGrade = 0;
let topStudentCourse = "";

courses.forEach(course => {
    course.students.forEach(student => {
        if (student.grade > highestGrade) {
            highestGrade = student.grade;
            topStudent = student;
            topStudentCourse = course.name;
        }
    });
});

console.log("6. Top performing student across all courses:");
console.log(`   ${topStudent.name} with grade ${highestGrade} in ${topStudentCourse}`);

const perfectAttendanceCourses = courses.filter(course => 
    course.students.some(student => student.attendance === 100)
);
console.log("7. Courses with students having perfect attendance:");
perfectAttendanceCourses.forEach(course => {
    const perfectStudents = course.students.filter(student => student.attendance === 100);
    console.log(`   ${course.name}: ${perfectStudents.map(s => s.name).join(", ")}`);
});

const instructors = Array.from(new Set(courses.map(course => course.instructor)));
console.log("8. All instructors:", instructors);

const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
console.log("9. Total credits offered:", totalCredits);

const isCoursesArray = Array.isArray(courses);
const allCoursesHaveStudents = courses.every(course => Array.isArray(course.students));
console.log("10. Data integrity check:");
console.log(`   Courses is array: ${isCoursesArray}`);
console.log(`   All courses have student arrays: ${allCoursesHaveStudents}`);

