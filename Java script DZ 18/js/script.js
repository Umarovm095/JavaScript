let man = {
    name: "Emin",
    family: "Umarov",
    age: 17,
    growth: "181cm",
    login: "UmarovExpo",
    password: 0007,

    adress: {
        republic: "Chechen Republic",
        city: "Grozny",
        street: "Prospekt Kadyrova 216",
    },
};

let proverka = promt('Введите свой пароль');
if(man.password == proverka){
    console.log('Welcome, ${man.name} ${man.family}. Your login: ${man.login}');
} else {
    console.log('Your password ${proverka} not true');
}