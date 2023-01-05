console.log(`hello world`);
console.log(`hello`,`world`);
console.clear();
var i = 5;
console.log(i);
var firstName = `John`;
var lastName = `Doe`;
console.log(firstName, lastName);
console.log( typeof firstName );
console.log( typeof `firstName` );
console.log( typeof `firstName` );
var data = `This is a string`;
console.log(data.length);
console.log(data[0]);
console.log(data.length - 1);
console.log(data[data.length - 1]);
var res = data.toUpperCase();
console.log(res);
var reslt = data.toLowerCase();
console.log(reslt);
var message = `JS for web`;
console.log(message.trim());
console.log(message);
console.log(message.trimStart());
console.log(message.trimEnd());
console.log(message.split(`         `));
var rese = message.replace(` `,`_`);
console.log(rese);
var resee = message.replaceAll(` `,`_`);
console.log(resee);
// eslint-disable-next-line no-redeclare
var res = message
.toUpperCase()
.trim()
.replaceAll(` `,`_`);
console.log(res);
for (let i = 0; i < 5; i++)
{
    console.log(`Inside the for loop: `, i);
}
const fName = `John`;
const lName = `Doe`;
console.log(fName, lName);
const data1 = undefined ;
console.log(data1);
const num1 = 4;
const num2 = 9;
const result = num1 + num2;
console.log(result);

const n1 = 4;
const n2 = 7;
const res1 = n1 + `+` + n2 + `=` + (n1 + n2);
const res2 = `${n1} + ${n2}  = ${n1 + n2}`;

console.log(res1);
console.log(res2);
var firstString = 'Java';
var lastString = 'script';
var res4 = firstString + ' ' + lastString;
var res5 = firstString.concat('', lastString);
var res3 = `${firstString}  ${lastString}`;
console.log(res4);
console.log(res5);
console.log(res3);
