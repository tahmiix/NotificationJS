/*let students = [{name: "Thami", age: "27", course: "Javascript"}, {name: "Gift", age: "29", course: "Java"}, {name: "Thamsanqa", age: "22", course: "Typescript"}];


function amountDue(price, quantity){
    let amountDue = price * quantity;

    return amountDue;

}

let amountDue2 = (price,quantity) => {

    return price * quantity
}
let price = 28;
let quantity = 6;

console.log(amountDue2(price,quantity)); */

/*let product = [{name: "Lenovo", model: "T450", price: 20000},
                                        {name: "Dell", model: "T450", price: 12000},
                                        {name: "Hp", model: "T450", price: 16000}];


    function display(product){
        let laptopOne = product[0].name;
        let laptopTwo = product[1].name;
   return `The first laptop is a : ${laptopOne} and the second laptop is a : ${laptopTwo}`

}


console.log(display(product));

    function laptopPrices(product){
        let LenovoPrice = product.filter(name => product.name = "Lenovo");

        return LenovoPrice;
    }

    console.log(laptopPrices(product));*/

let Person = {name: "Thamsanqa", amount: 500};

let shoppingCart = [{product:"mouse", price: 170},{product:"keyboard", price: 200}];

function buyProducts(person,shopProducts){
  let priceOfproducts= shoppingCart[0].price + shoppingCart[1].price;

   /* if(shopProducts.find(person.products,0)){
       console.log("Products Found");

       priceOfproducts = shopProducts[0].price + shopProducts[1].price;
    }else{
        console.log("No products in store")
    } */

    return priceOfproducts;
}

console.log(buyProducts(Person,shoppingCart));