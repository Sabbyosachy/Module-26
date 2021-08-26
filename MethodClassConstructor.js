class Support {
    name;
    role = "web-deve";
    loction = "BD";
    constructor(name) {
        this.name = name;
    }
    startSession() {
        console.log('strat a support');
    }
}
const A = new Support('Amir khan');
const B = new Support('Salman khan');
console.log(A, B);