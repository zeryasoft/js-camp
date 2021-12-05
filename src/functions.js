function addToCart(quantity,productName="Elma") {
    console.log("sepete eklendi : ürün :"+productName + " adet : "+quantity);
}

addToCart();
addToCart(10,"Yumurta");
addToCart(20);

let sayHello=()=>{
    console.log("Hello World!");
}

sayHello();

let sayHello2=function () {
    console.log("Hello World 2");
}

sayHello2();

function addToCart2(productName,quantity,unitPrice) {
    console.log("sepete eklendi : ürün :"+productName + " adet/kg : "+quantity +" fiyatı : "+unitPrice);
}

addToCart2("Elma",2,5);
addToCart2("Armut",3,4);
addToCart2("Karpuz",2,10);

function addToCart3(product) {
    console.log("Ürün :"+product.productName)
    console.log("Adet :"+product.quantity)
    console.log("Fiyat :"+product.unitPrice)
}

let product1={productName:"Elma",unitPrice:5,quantity:2}
let product2={productName:"Armut",unitPrice:4,quantity:3}
let product3={productName:"Muz",unitPrice:12,quantity:1}

product2=product3;
product2.productName="Karpuz";
addToCart3(product3);

function addToCart4(products) {
    console.log(products);
}

let products=[
    {productName:"Elma",unitPrice:5,quantity:2},
    {productName:"Armut",unitPrice:4,quantity:3},
    {productName:"Muz",unitPrice:12,quantity:1}
]

addToCart4(products);

function add(number1,number2) {
    console.log(number1+number2);    
}
function add2(number1,number2,number3) {
    console.log(number1+number2+number3);    
}
function add3(number1,number2,number3,number4) {
    console.log(number1+number2+number3+number4);    
}

function add(...numbers) {//rest=>birleştiriyor
    console.log(numbers);
}

function add(...numbers) {
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total+=numbers[i];
    }
    console.log(total);
}

//add(20,30);
//add(20,30,40);
add(20,30,40,50);//rest mantığı

let numbers=[20,30,2,60,4]
console.log(Math.max(...numbers))//... spread=> ayrıştırıyor

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu",population:"21M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"11M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Samsun","Trabzon"]
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)

let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}={productName:"Elma",unitPrice:10,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)