let arr = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
console.log(arr);

arr.forEach(function(item, key) {
    if(item % 2 == 1){
        console.log(item);
    }
})


let a = [ "lorem ipsum", "javascript", "php", "css", "react", "git", "html", "mysql"];
console.log(a);

a.forEach(function(item, key){
    if(item.length <= 4){
        console.log(item);
    }
})






let number = [1, -3, 5, 6, -7, 8, 9, -11];

let number2 = number.filter(function(item,key){
    return item < 0
})
console.log(number2);


let chisla = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

let chisla2 = chisla.filter(function(item,key){
    return item % 2 == 0;
})
console.log(chisla2);


let words = [ "lorem ipsum", "javascript", "php", "css", "react", "git", "html", "mysql"];

let words2 = words.filter(function(item, key){
    return item.length != 3;
})
console.log(words2);




// Map

let qwerty = [5, 6, 7, 8, 9 ];

let qwerty2 = qwerty.map(function(item, key){
    return item * item
})
console.log(qwerty2);



let title = [
    {a:10, b:5},
    {a:20, b:22},
    {a:131, b:55}
]

let title2 = title.map(function(item,key){
    return item.a + item.b
})
console.log(title2);


// Reduce

let abc = [-13, 0, 12, 1662, -0.32, -102, -2];

let abc2 = abc.filter(function(item,key){
    return item < 0
})
console.log(abc2);

let result = abc2.reduce(function(sum, item, key, arr){
    return sum + item
}, 0)
console.log(result);



let expo = [
    {x: 10, y: "lorem"}, 
    {x: 21, y: "lorem"}, 
    {x: -17, y: "lorem"}, 
    {x: 156, y: "lorem"}
]

let resultExpo = expo.reduce(function(sum,item,key){
    return sum + item.x
}, 0)
console.log(resultExpo);
