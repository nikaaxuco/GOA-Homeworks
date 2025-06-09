let totalItems = 200;
let itemsPBox = 7;

let completeBoxes = (totalItems - (totalItems % itemsPBox)) / itemsPBox;
let leftoverItems = totalItems - (completeBoxes * itemsPBox);

console.log("left items:", leftoverItems);

