'use strict';

const pi = 3.14;

const sumValues = (x,y) => x + y;
const subtractValues = (x,y) => x - y;
const calculateCircleArea = (r) => r ** 2 * pi;

export { // megadható a változók előtt is az export, de ez a javasolt, áttekinthetőbb forma
    sumValues as sum, // más néven is lehet exportálni
    subtractValues as subtract,
    calculateCircleArea
};