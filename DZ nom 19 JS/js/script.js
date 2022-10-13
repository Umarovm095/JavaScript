let a = ['lorem', 123, true, 'ipsum'];

console.log(a.length);
console.log(a[0]);
console.log(a[3]);


let em = ['expo', 777, false, 'grozny'];

em.splice(0,3, 'Expovision', 321, true );

em.unshift('moscow');

em.push('frontend');

em.shift();

em.pop();
em.pop();

console.log(em);



let number = [1, 3, 5, 7, 9];

number[0] = number[0] + 1;
number[1] = number[1] + 1;
number[2] = number[2] + 1;
number[3] = number[3] + 1;
number[4] = number[4] + 1;

console.log(number);