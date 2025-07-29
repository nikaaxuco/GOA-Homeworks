
function checkType(value) {

    
    if (value === null) {
        return "primitive";
    }
    
    const type = typeof value;
    if (type === "object" || type === "function") {
        return "non-primitive";
    } else {
        return "primitive";
    }
}

function allFalsy(arr) {

    return arr.every(element => !element);
}

function removeFalsy(arr) {

    return arr.filter(element => Boolean(element));
}


function countTruthiesAndFalsies(arr) {
    let truthy = 0;
    let falsy = 0;
    
    arr.forEach(element => {
        if (element) {
            truthy++;
        } else {
            falsy++;
        }
    });
    
    return { truthy, falsy };
}


console.log("checkType function");
console.log(checkType(42));          
console.log(checkType("hello"));     
console.log(checkType(true));        
console.log(checkType(null));        
console.log(checkType(undefined));   
console.log(checkType({}));          
console.log(checkType([]));          
console.log(checkType(function(){}));

console.log("allFalsy function");
console.log(allFalsy([false, 0, "", null, undefined])); 
console.log(allFalsy([false, 0, "", 1]));               
console.log(allFalsy([]));                              
console.log(allFalsy([0, false, NaN]));                 

console.log("removeFalsy function");
console.log(removeFalsy([1, 0, true, false, "hello", "", null, undefined, NaN])); 

console.log(removeFalsy([false, 0, "", null])); 
console.log(removeFalsy([1, 2, 3, "test"]));    

console.log("countTruthiesAndFalsies function");
console.log(countTruthiesAndFalsies([1, 0, true, false, "hello", "", null])); 

console.log(countTruthiesAndFalsies([1, 2, 3]));        
console.log(countTruthiesAndFalsies([0, false, null])); 