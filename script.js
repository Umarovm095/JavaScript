let name = "Эмин"; // тип данных string
console.log(name);

const age = 17; // тип данных number
console.log(age);

const bj = 15;

if(bj > age){
console.log(`Доступ запрещен!`);
} else if( bj > age){
    console.log(`Привет $(name)`);
}

function viewMoney(){
    return(`Вот вам 10$`);
}
viewMoney()

function getMoney(a){
    console.log(`Вот вам ${a}$`);
    return(`Вот вам ${a}$`)
}
getMoney(10)

function kub(a) {
    console.log(a * a);
}

kub(21)

function nomer(a,b,c){

    if (a > b && a > c){
        console.log(a + ' Наибольшее число');
    } else if(b > a && b > c){
        console.log(b + ' Наибольшее число');
    } else if(c > a && c > b){
        console.log(c + ' Наибольшее число');
    }
}
nomer(1,3,2);

function discriminant(a, b, c){
    return result = (b**2)-(4*a*c)
}
console.log(discriminant(5,6,7));

function sumNomer(num1, num2){
    if((num1 % 2 == 0) && (num2 % 2 == 0)){
        return calc = num1 * num2
    } else if((num1 % 2 != 0) && (num2 % 2 != 0)){
        return calc = num1 + num2
    } else if(num1 % 2 != 0){
        return num1
    } else if(num2 % 2 != 0){
        return num2
    }
}
console.log(sumNomer(2, 5));