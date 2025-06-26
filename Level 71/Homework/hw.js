

let numsArray = [1, 2, 3, 4, 5];
let strArray = ['a', 'b', 'c', 'd'];

let combinedArray = [...numsArray, ...strArray];
combinedArray.copyWithin(4, 0, 3);
combinedArray.fill("filled", 2, 5);
combinedArray.pop();
combinedArray.shift();
combinedArray.unshift(100, 200);

function modifyArray(arr) {
    let workingArray = [...arr];
    workingArray.copyWithin(4, 0, 3);
    workingArray.fill("filled", 2, 5);
    workingArray.pop();
    workingArray.shift();
    workingArray.unshift(100, 200);
    return workingArray;
}


let people = [
    { name: 'John', age: 30 },
    { name: 'Dato', age: 25 },
    { name: 'Mike', age: 35 }
];

let places = [
    { city: 'London' },
    { city: 'Tbilisi' },
    { city: 'Tokyo' }
];

let mergedArray = [...people, ...places];
mergedArray.copyWithin(2, 0, 2);
mergedArray.fill({ city: 'New York' }, mergedArray.length - 2);
mergedArray.pop();
mergedArray.shift();



let students = ['Alice', 'Bob', 'Charlie'];
let grades = [90, 85, 95];

function addStudent(name, grade) {
    students.unshift(name);
    grades.unshift(grade);
    return { students, grades };
}

function removeLastStudent() {
    students.pop();
    grades.pop();
    return { students, grades };
}

function replaceGrade(index, newGrade) {
    grades.splice(index, 1, newGrade);
    return grades;
}

function updateGrades(value) {
    grades.fill(value);
    return grades;
}

let playlist = ['Song 1', 'Song 2', 'Song 3', 'Song 4', 'Song 5'];

function addSong(title) {
    playlist.unshift(title);
    return playlist;
}

function removeLastSong() {
    playlist.pop();
    return playlist;
}

function moveSongs() {
    playlist.copyWithin(playlist.length - 2, 0, 2);
    return playlist;
}

function combinePlaylists(secondPlaylist) {
    return playlist.concat(secondPlaylist);
}
