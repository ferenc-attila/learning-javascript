'use strict';

import {
    sum as sumValues, subtract as subtractValues, calculateCircleArea //más néven is lehet importálni
} from './module.js';

console.log(sumValues(45,8));
console.log(subtractValues(45,8));
console.log(calculateCircleArea(15));
// console.log(pi); Hibára fut, de a függvényben használható