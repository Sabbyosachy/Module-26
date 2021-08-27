// StringiFy Create object to String 
// ---------------------------------------------------------------------------
/* const User = { id: 11, name: 'susan', jpb: 'actor' };
const Stringfied = JSON.stringify(User);
console.log(Stringfied);
console.log(User); */

const shop = {
    name: 'Alia',
    address: 'sylhet',
    Products: ['laptop', 'mobile', 'pepsi'],
    Profit: 15000,
    isExpensive: false
}
const ShopStringified = JSON.stringify(shop);
console.log(ShopStringified);
//Stringify to object
const converted = JSON.parse(ShopStringified);
console.log(converted.Products);


// --------------------------------------------------------------