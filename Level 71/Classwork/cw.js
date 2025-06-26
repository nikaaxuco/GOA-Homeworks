    let array1 = [1, 2, 3, 4];
    let array2 = [5, 6, 7, 8];

    function modifyArray(inputArray) {
       
        let newArray = [];
        for (let i = 0; i < array1.length; i++) {
            newArray.push(array1[i]);
        }
        for (let i = 0; i < array2.length; i++) {
            newArray.push(array2[i]);
        }
    
       
        newArray[newArray.length - 2] = newArray[0];
        newArray[newArray.length - 1] = newArray[1];
    
      
        newArray[newArray.length - 3] = 0;
        newArray[newArray.length - 2] = 0;
        newArray[newArray.length - 1] = 0;
    
       
        let lastElement = newArray[newArray.length - 1];
        newArray = newArray.slice(0, newArray.length - 1);
    
      
        let firstElement = newArray[0];
        newArray = newArray.slice(1);
    
      
        let tempArray = [10, 20];
        for (let i = newArray.length - 1; i >= 0; i--) {
            newArray[i + 2] = newArray[i];
        }
        newArray[0] = tempArray[0];
        newArray[1] = tempArray[1];
    
        return {
            modifiedArray: newArray,
            firstElement: firstElement,
            lastElement: lastElement
        };
    }

  
    let result = modifyArray([...array1, ...array2]);
    console.log(result.modifiedArray);
    console.log("First removed element:", result.firstElement);
    console.log("Last removed element:", result.lastElement);
