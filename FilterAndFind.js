/* // check the number greater than 5
const Num = [5, 7, 8, 9, 1, 2];
const Bignum = Num.filter(Number => Number > 5);
const Small = Num.filter(Number => Number < 5);
console.log(Bignum, Small);
 */


/* const Product = [
    { name: 'watrer bottle', color: 'Black', price: 50 },
    { name: 'Sticky paper', color: 'white', price: 30 },
    { name: 'watch', color: 'pink', price: 50 }
];

const Productname = Product.filter(Product => Product.color == 'Black');
console.log(Productname); */

const Product = [
    { name: 'Pc', price: 1200 },
    { name: 'Tv', price: 500 },
    { name: 'phone', price: 100 },
    { name: 'Camara', price: 100 }

];

const ProductName = Product.filter(Num => Num.price < '500');
console.log(ProductName);