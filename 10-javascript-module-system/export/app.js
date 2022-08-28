'use strict';

// Importálás egyes függvényeket
// import {
//     sum as sumValues, subtract as subtractValues, calculateCircleArea //más néven is lehet importálni
// } from './module.js';

//Importálás mindent egy fájlból

import * as MyMath from './module.js'; //ekkor egy MyMath objektumként importálja a fájl tartalmát

console.log(MyMath.sumValues(45,8));
console.log(MyMath.subtractValues(45,8));
console.log(MyMath.calculateCircleArea(15));
// console.log(pi); Hibára fut, de a függvényben használható