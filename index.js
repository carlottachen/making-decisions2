//Carlotta

//console.log(`hello world`);

let backpack = [];

backpack.push('sword', 'shield', 'food');

console.log(backpack);

//took first item from array, assigned to sword array
//let sword = backpack.shift();

//start at index 1 and remove one item
//added to new array called sword
let sword = backpack.splice(1, 1);
console.log(backpack, sword);

//insert item in sword back into backpack
//item will not be removed from sword array
backpack.unshift(sword[0]);
console.log(backpack, sword);

//add a fur coat to backpack at end of array
let furCoat = 'fur coat';
backpack.push(furCoat);
console.log(backpack, sword);

//will remove last item, not stored anywhere else
backpack.pop();
console.log(backpack, sword);

//see how many items inside backpack array
let itemCount = backpack.length;
console.log(itemCount);

//add more items to end of backpack array
backpack.push('flint', 'blanket', 'knife', 'toothbrush');
itemCount = backpack.length;
console.log(backpack);

let backpack2 = backpack.splice(2, 3);
console.log(backpack, backpack2);
console.log(backpack2[0]); //look at first item in backpack2 array

//loop through and display each item in backpack
//by puttint 'let i = 0', i is contained to this code block
for(let i = 0; i < backpack.length; i++){
	console.log(backpack[i]);
}



