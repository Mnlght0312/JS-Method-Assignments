//JS Methods

//Task-1 (reverse a number)

let Numbers = "4,5,3,6,1"; 
// let reverseNumbers = (Numbers.revers().Numbers.split(' '));
console.log(Numbers);
let ss = Numbers.split(',')
console.log(ss);
let reverseNumbers =ss.reverse().join('');
console.log(`reversed:`, reverseNumbers);

//Task-2 (In the following shopping cart add, remove, edit items)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//Task 2.1
console.log(shoppingCart.unshift(`Meat`));
console.log(shoppingCart);

//Task 2.2
let qq = shoppingCart.push(`Sugar`);
console.log(shoppingCart);

//Task 2.3
shoppingCart.splice(4,1);
console.log(shoppingCart);

//Task 2.4
let elee = shoppingCart.join();
console.log(elee.replace("Tea", "Green Tea"));

//Task 3 (үгнүүдийн дундуур зураас оруулаx функц бичнэ үү)

let ez = `This is where i begin`;
let life = ez.split(' ')
console.log(life);
let watashiwa = life.join('-');
console.log(watashiwa);

//Task-4 (array - аас тодорхой элементийг устгах : example: console.log(removeArrayElement([2, 1, 6, 5, 8], 6)) [2, 1, 5, 8] )

let removeArray = `2,1,6,5,8,6`;
let ww = removeArray.split(`,`)
console.log(ww);
ww.splice(2,1);
console.log(ww);
ww.splice(4,5);
console.log(ww);





