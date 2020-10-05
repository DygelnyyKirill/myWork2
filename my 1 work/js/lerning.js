// 'use strict'

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//         }
//     },
//     rememberMyFilm: function() {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt("Один из последних просмотренных фильмов?", "");
//             let b = prompt("На сколько оцените его?", "");
//             if (a != null && b != null && a != '' && b != '' && a.length <50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     detectPersonalLevel: function() {
//         if (personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("ERROR");
//         }; 
//     },
//     showMyDb: function(hidden) {
//         if(!hidden) {
//             console.log(personalMovieDB)
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            
//             if (genre === '' || genre == null) {
//                 console.log('вы ввели некорректные данные!')
//                 i--;
//             } else {
//                 personalMovieDB.genres[i - 1] = genre;         
//             }
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Ваш любимый жанр под номером ${i + 1} - eto ${item}`);
//         });
//     }
// };


let money, time;


function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            let b = prompt("Во сколько обойдется?", "");
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof (b)) != null 
            && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            };
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("высокий уровень достатка")
        } else {
            console.log("error");
        };
    }, 
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('KakoBa cymma dollar?');
            let percent = +prompt('Whot %?');
            console.log(save);
            console.log(percent);
            console.log(typeof(save), typeof(percent));
    
            appData.monthIncome = save/100/12*percent;
            alert('Doxod mounth:' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i <= 3; i++) {
            let questionOptExpenses = prompt('Optinal expense item?');
            appData.optinalExpenses[i] = questionOptExpenses;
            console.log(appData.optinalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt('what brings additional income?');
        if (items != "string" || items =='' || items == null) {
            console.log('you entered incorrect data');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('maybe something else?'));
            appData.income.sort();
        }  
        appData.income.forEach (function (itemmassive, i) {
            alert('Ways to earn extra money: ' + (i + 1) + ' + itemmassive');
        });
    }
};


// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", "");
//     i++;
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof (b)) != null 
//     && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
    
//     }; 
// };

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "");
//     let b = prompt("Во сколько обойдется?", "");
//     i++;
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof (b)) != null 
//     && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
    
//     } 
// } while (i < 2);

