console.log("Merhaba Sedat")

//JS TypeSave değil
let dolarDun=9.20
let dolarBugun=9.30
{
    let dolarDun=9.10
}

const euroDun=11.2
//euroDun=11 const değeri sonradan değiştirilemez

console.log(euroDun)


//array
//camelCasing
//PascalCasing
let konutKredileri=["Konut Kredisi","Ellak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    let element = konutKredileri[index];   
    
    console.log("<li>"+element+"</li>") 
}

console.log("</ul>")
