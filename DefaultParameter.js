// Default parameter use 

/* function add(num1, num2 = 0) {
    const total = num1 + num2;
    return total;
}
console.log(add(10, 10)); */

/* function name(first, last = 'chowdhury') {
    const Full = first + ' ' + last;
    return Full;
}
const A = name('susan');
console.log(A); */

function Fullname(first, last = "khan") {
    const Name = first + ' ' + last;
    return Name;

}
console.log(Fullname('susan'));