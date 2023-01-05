const numbers = [1,2,3,'four'];
numbers.push(5,6);
console.log(numbers);
const firstArray = [1, 2, 3];
const secondArray = [4,5,6,7];

firstArray.push(...secondArray);

const thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);
function greet()
{
 console.log('hello world');   
}
greet();
function add(num1, num2){
    return num1 + num2;
}
const reslt = add(1,2);
console.log(reslt);

function convertCasing(value)
{
   return value.toUpperCase() ;
}
const res = convertCasing('Hello');
console.log(res.toLowerCase());

// function getFirstChar(value){
//     return value[0];
// }
// const
const getFirstChar = value => value[0];
console.log(getFirstChar('hello'));
const num = [2,3,4,6,7];
// const evenNumbers = [];
// function isEven(value){
//     return value % 2 == 0;
// }
const result1 = num.filter(value => value % 2 == 0);
console.log(result1);
const numb = [1,2,3,4,5,6];
numb.fill(10);
console.log(numb);
const numbr = [1,2,3,5,4,6,7];
if(numbr.includes(5)){
    console.log('array contains five');
}
const numbrr = [1,2,3,5,4,6,7];
console.log(numbrr.toString());
console.log(numbrr.join('->'));
let value = NaN;
console.log();


