//1----Easy:
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr);

//2----
let str = "hello";
console.log(str.toUpperCase());
//3----
let n = [1, 2, 3];
n.push(4);
console.log(n);
//4----
let len = [7, 8, 9];
console.log(len.length);

//5----
let me = "Hello world";
let newone = me.replace("world", "Javascript");
console.log(newone);

//6----
let one = [4, 5, 6];
let a = one.shift();
console.log(a);

//7----
let uz = "Uzbekistan";
console.log(uz.length);

//8----
let massiv = [2, 3, 4];
massiv.unshift(5);
console.log(massiv);

//9----
let small = "JAVASCRIPTDA";
console.log(small.toLowerCase());
//10----
let fruits = ["Apple", "Banana", "Cherry"];

//Medium====
//1----
let inc = [5, 2, 9, 1, 7];
inc.sort((a, b) => a - b);
console.log(inc);

//2----
let k = "apple,banana,cherry";
let fruit = k.split(",");
console.log(fruit);

//3----
let son = [1, 2, 3, 4, 5];
let bormi = son.includes(3);
console.log(bormi);

//4----
let js = "JavaScript";
console.log(js.slice(0, 4));

//5----
let even = [1, 2, 3, 4, 5, 6];

//6----
let soz = "hello world";
console.log(soz.includes("world"));

//7----
let index = [10, 20, 30, 40];
console.log(index.indexOf(30));

//8----
let qism = [1, 2, 3, 4, 5];
console.log(qism.splice(1, 2));

//9----
let plus = [5, 10, 15];
let sum = 0;
let num = plus.forEach(qosh => {
    sum+=qosh;
});
console.log(sum);

//10----
let change = "123 - 456 - 789";
console.log(change);
