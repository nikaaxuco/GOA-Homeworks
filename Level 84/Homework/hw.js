

const studentData = [
    {
        id: 1,
        name: "Alice Johnson",
        grades: {
            Math: [85, 92, 78, 88],
            Science: [90, 87, 93, 89],
            History: [82, 85, 79, 88]
        },
        attendance: [true, true, false, true, true, true, false, true, true, true],
        extracurricular: ["Chess Club", "Science Fair", "Debate Team"]
    },
    {
        id: 2,
        name: "Bob Smith",
        grades: {
            Math: [76, 82, 85, 79],
            Science: [88, 91, 85, 87],
            History: [90, 88, 92, 89]
        },
        attendance: [true, true, true, false, true, true, true, true, false, true],
        extracurricular: ["Basketball", "Math Club"]
    },
    {
        id: 3,
        name: "Carol Davis",
        grades: {
            Math: [95, 98, 92, 96],
            Science: [94, 96, 98, 95],
            History: [88, 91, 87, 90]
        },
        attendance: [true, true, true, true, true, true, true, true, true, true],
        extracurricular: ["Student Council", "Honor Society", "Volunteer Club"]
    },
    {
        id: 4,
        name: "David Wilson",
        grades: {
            Math: [68, 72, 75, 70],
            Science: [75, 78, 73, 76],
            History: [80, 77, 82, 79]
        },
        attendance: [false, true, true, true, false, true, true, false, true, true],
        extracurricular: ["Art Club"]
    },
    {
        id: 5,
        name: "Emma Brown",
        grades: {
            Math: [88, 85, 90, 87],
            Science: [92, 89, 94, 91],
            History: [85, 88, 86, 89]
        },
        attendance: [true, true, true, true, true, false, true, true, true, true],
        extracurricular: ["Drama Club", "Yearbook Committee", "Environmental Club"]
    }
];

console.log("=== STUDENT DATA ANALYSIS ===\n");


console.log("1. PERSONALIZED GREETINGS:");
console.log("---------------------------");
studentData.forEach(student => {
    console.log(`Hello, ${student.name}!`);
});

console.log("\n");


console.log("2. STUDENT NAMES ARRAY:");
console.log("-----------------------");
const studentNames = studentData.map(student => student.name);
console.log("Student Names:", studentNames);

console.log("\n");


console.log("3. STUDENT OVERALL AVERAGES:");
console.log("----------------------------");

const studentAverages = studentData.map(student => {
    
    const subjects = Object.keys(student.grades);
    
    
    const totals = subjects.reduce((acc, subject) => {
        const subjectGrades = student.grades[subject];
        const subjectTotal = subjectGrades.reduce((sum, grade) => sum + grade, 0);
        
        return {
            totalPoints: acc.totalPoints + subjectTotal,
            totalGrades: acc.totalGrades + subjectGrades.length
        };
    }, { totalPoints: 0, totalGrades: 0 });
    
    
    const overallAverage = totals.totalPoints / totals.totalGrades;
    
    return {
        name: student.name,
        overallAverage: Math.round(overallAverage * 100) / 100 
    };
});


studentAverages.forEach(student => {
    console.log(`${student.name}: ${student.overallAverage}%`);
});

console.log("\nStudent Averages Array:", studentAverages);

console.log("\n");


console.log("=== BONUS COMPREHENSIVE ANALYSIS ===\n");


console.log("4. SUBJECT-WISE CLASS AVERAGES:");
console.log("-------------------------------");


const allSubjects = [...new Set(studentData.flatMap(student => Object.keys(student.grades)))];

const subjectAverages = allSubjects.map(subject => {
    const allGradesForSubject = studentData
        .filter(student => student.grades[subject]) 
        .flatMap(student => student.grades[subject]);
    
    const average = allGradesForSubject.reduce((sum, grade) => sum + grade, 0) / allGradesForSubject.length;
    
    return {
        subject: subject,
        classAverage: Math.round(average * 100) / 100
    };
});

subjectAverages.forEach(subjectData => {
    console.log(`${subjectData.subject}: ${subjectData.classAverage}%`);
});

console.log(" ");


console.log("5. ATTENDANCE ANALYSIS:");
console.log("-----------------------");

const attendanceAnalysis = studentData.map(student => {
    const totalDays = student.attendance.length;
    const presentDays = student.attendance.filter(day => day === true).length;
    const attendanceRate = (presentDays / totalDays) * 100;
    
    return {
        name: student.name,
        attendanceRate: Math.round(attendanceRate * 100) / 100,
        daysPresent: presentDays,
        totalDays: totalDays
    };
});

attendanceAnalysis.forEach(student => {
    console.log(`${student.name}: ${student.attendanceRate}% (${student.daysPresent}/${student.totalDays} days)`);
});

console.log("\n");


console.log("6. EXTRACURRICULAR INVOLVEMENT:");
console.log("-------------------------------");

const extracurricularAnalysis = studentData.map(student => ({
    name: student.name,
    activitiesCount: student.extracurricular.length,
    activities: student.extracurricular
}));

extracurricularAnalysis.forEach(student => {
    console.log(`${student.name}: ${student.activitiesCount} activities - ${student.activities.join(", ")}`);
});


const allActivities = studentData.flatMap(student => student.extracurricular);
const activityCounts = allActivities.reduce((acc, activity) => {
    acc[activity] = (acc[activity] || 0) + 1;
    return acc;
}, {});

console.log("\nMost Popular Activities:");
Object.entries(activityCounts)
    .sort(([,a], [,b]) => b - a)
    .forEach(([activity, count]) => {
        console.log(`${activity}: ${count} student(s)`);
    });

console.log(" ");


console.log("7. PERFORMANCE CATEGORIES:");
console.log("--------------------------");

const excellentStudents = studentAverages.filter(student => student.overallAverage >= 90);
const goodStudents = studentAverages.filter(student => student.overallAverage >= 80 && student.overallAverage < 90);
const needsImprovementStudents = studentAverages.filter(student => student.overallAverage < 80);

console.log("Excellent Performance (90%+):");
excellentStudents.forEach(student => console.log(`  - ${student.name}: ${student.overallAverage}%`));

console.log("\nGood Performance (80-89%):");
goodStudents.forEach(student => console.log(`  - ${student.name}: ${student.overallAverage}%`));

console.log("\nNeeds Improvement (<80%):");
needsImprovementStudents.forEach(student => console.log(`  - ${student.name}: ${student.overallAverage}%`));

console.log("\n");


console.log("8. CLASS SUMMARY STATISTICS:");
console.log("----------------------------");

const classStats = studentAverages.reduce((stats, student) => {
    return {
        totalStudents: stats.totalStudents + 1,
        totalGrades: stats.totalGrades + student.overallAverage,
        highestGrade: Math.max(stats.highestGrade, student.overallAverage),
        lowestGrade: Math.min(stats.lowestGrade, student.overallAverage)
    };
}, {
    totalStudents: 0,
    totalGrades: 0,
    highestGrade: 0,
    lowestGrade: 100
});

const classAverage = classStats.totalGrades / classStats.totalStudents;

console.log(`Total Students: ${classStats.totalStudents}`);
console.log(`Class Average: ${Math.round(classAverage * 100) / 100}%`);
console.log(`Highest Grade: ${classStats.highestGrade}%`);
console.log(`Lowest Grade: ${classStats.lowestGrade}%`);


const overallAttendanceRate = studentData.reduce((total, student) => {
    const presentDays = student.attendance.filter(day => day === true).length;
    const attendanceRate = (presentDays / student.attendance.length) * 100;
    return total + attendanceRate;
}, 0) / studentData.length;

console.log(`Overall Class Attendance Rate: ${Math.round(overallAttendanceRate * 100) / 100}%`);

console.log("=== ANALYSIS COMPLETE ===");