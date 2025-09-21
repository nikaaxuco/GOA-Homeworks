
const myPromise = new Promise((fulfill, fail) => {

    let success = true;


    if (success) {

        fulfill("ოპერაცია წარმატებით შესრულდა!");
    } else {

        fail("რაღაც შეცდომა მოხდა!");
    }
});


myPromise
    .then(result => {

        console.log(result);
    })
    .catch(error => {

        console.log(error);
    })
    .finally(() => {
 
        console.log("Promise დასრულდა");
    });


    