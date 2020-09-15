import {
    MyMath
} from "../01-MyMath/MyMath.js";

let mat, num1, num2, sign;

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
        this.numpad = numpad;
        this.outputCalculation = outputCalculation;
        this.outputSolution = outputSolution;
        this.setupNumPad();

    }

    setupNumPad() {
        /* for(let i=0;i<this.numpad.children.length;i++){
             //this.numpad.children[i].addEventListener('click', ()=>{this.onButtonClick(this.numpad.children[i].innerHTML);},false);
             this.numpad.children[i].addEventListener('click', this.onButtonClick);   
         }*/
        let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', ':', 'AC'];
        for (let i = 0; i < ar.length; i++) {
            //this.numpad.children[i].addEventListener('click', ()=>{this.onButtonClick(this.numpad.children[i].innerHTML);},false);

            let li = document.createElement("button");
            li.innerText = ar[i];
            li.addEventListener('click', this.onButtonClick.bind(this, i));
            this.numpad.appendChild(li);

        }
    }

    onButtonClick(symbol, event) {
        //regex \d+
        /*
        var term = "sample1";
        var re = new RegExp("^([a-z0-9]{5,})$");
        if (re.test(term)) {
        */
        switch (event.target.innerText) {
            case "AC":
                console.log("pressedAC");
                this.clear();
                break;
            case "+":
                if (num1 !== undefined) {
                    sign = "+";
                    let string = "" + num1 + sign;
                    this.print(string);
                }
                break;

            case "-":
                console.log("pressed-");
                if (num1 !== undefined) {
                    sign = "-";
                    let string = "" + num1 + sign;
                    this.print(string);
                }
                break;
            case "*":
                console.log("pressed*");
                if (num1 !== undefined) {
                    sign = "*";
                    let string = "" + num1 + sign;
                    this.print(string);
                }
                break;
            case ":":
                console.log("pressed:");
                if (num1 !== undefined) {
                    sign = ":";
                    let string = "" + num1 + sign;
                    this.print(string);
                }
                break;

            default:
                console.log("default:" + event.target.innerText);
                console.log("default num before " + num1);
                
                if (num1 === undefined) {
                    let re = new RegExp(/\d+/),
                        input = event.target.innerText * 1;
                    if (re.test(input)) {
                        console.log("match");
                        mat = new MyMath(input);
                        num1 = input;
                        let string = "" + num1;
                        this.print(string);
                        break;
                    }
                }
                if (num1 !== undefined && sign !== undefined) {
                    let re = new RegExp(/\d+/),
                        input = event.target.innerText * 1;
                    if (re.test(input)) {
                        console.log("match3");
                        //console.log(mat.add(input));
                        let string = "" + num1 + sign + input;
                        this.print(string);
                        let solution;
                        switch (sign) {
                            case "+":
                                solution=mat.add(input);
                                break;
                                case "-":
                                    solution=mat.subtract(input);
                                break;
                                case "*":
                                    solution=mat.multiply(input);
                                break;
                                case ":":
                                    solution=mat.divide(input);
                                break;
                        }
                        this.printSolution(solution.result);
                        break;
                    }
                }


        }
        console.log("default after " + num1);

        /*  if(this.num1===undefined){
    let re = new RegExp(/\d+/),
    input = event.target.innerText*1;
      if(re.test(input)){
      console.log("match");    
      }else{
        console.log("not match");
      }
    //console.log("Null");
    }
*/
    }


    print(string) {
        console.log(string);
        this.outputCalculation.innerHTML = string;
    }

    printSolution(string) {
        console.log(string);
        this.outputSolution.innerHTML = string;
    }

    clear() {
        num1 = undefined;
                num2 = undefined;
                sign = undefined;
        this.outputCalculation.innerHTML = "";
        this.outputSolution.innerHTML = "";
    }

}