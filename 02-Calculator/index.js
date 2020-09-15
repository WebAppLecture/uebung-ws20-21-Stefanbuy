import {Calculator} from './Calculator.js';
window.Calculator = Calculator; //hier oder woanders und warum?
let calc = document.querySelector("#calculation"),
    sol = document.querySelector("#solution"),
    nump = document.querySelector(".numpad");
    window.calc = new Calculator(nump, calc, sol);