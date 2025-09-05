
const baseIngredients = ['water', 'herb', 'crystal'];


const clonedIngredients = [...baseIngredients];


clonedIngredients.unshift('phoenix feather');


const extras = ['moon dust', 'sun ray'];
const enhancedPotion = [...clonedIngredients, ...extras];


console.log(enhancedPotion);


