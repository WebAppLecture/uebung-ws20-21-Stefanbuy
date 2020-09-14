/**
 * 'export' ist nötig falls wir MyMath in einem anderen Modul importieren wollen.
 * 'class' legt fest dass es sich hierbei um eine Klasse handelt.
 * 'MyMath' ist der Name der Klasse.
 */
export class MyMath {

    /**
     * Der Konstruktor wird aufgerufen um neue Instanzen der Klasse zu generieren.
     * vgl. let myNumber = new MyMath(3);
     * 
     * @param value Unser Initialwert für den Wert von unserer MyMath Instanz.
     */
    constructor(value) {
        // 'this' referenziert den Kontext in dem die aktuelle Funktion aufgerufen wird. 
        // Hier referenziert es die Instanz der Klasse MyMath die wir gerade erstellen.
        // mit 'value * 1' erzwingen wir, dass value als number gelesen wird.
        if (value === undefined) {
            this.value = 0;
        } else {
            this.value = value * 1;
        }
        this.result;
    }

    add(value2) {
        this.result = this.value + value2;
        this.value = this.result;
        return this;
    }

    subtract(value2) {
        this.result = this.value - value2;
        this.value = this.result;
        return this;
    }

    multiply(value2) {
        this.result = this.value * value2;
        this.value = this.result;
        return this;
    }

    divide(value2) {
        if (value2 === 0) {
            this.result = this.value;
        } else {
            this.result = this.value / value2;
        }

        this.value = this.result;
        return this;
    }

    pow(value2) {
        if (value2 < 0) {
            console.log("no negatives");
        } else {
            this.result = this.value;
            for (let i = 1; i < value2; i++) {
                this.result = this.result * this.result;
            }
        }
        this.value = this.result;
        return this;
    }

    faculty() {
        let num = this.value;

        this.result = num;
        while (num > 1) {
            console.log("test");
            if (num % 1 !== 0) {
                break;
            }
            console.log(num);
            num = num - 1;
            this.result = this.result * num;
        }
        this.value = this.result;
        return this;
    }
}