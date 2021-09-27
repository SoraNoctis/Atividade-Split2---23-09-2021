"use strict";

console.log("Hello World again..."); //var, const & let
//{
//    const person = { name : "Yung" }
//
//    person.name = "Oliver"
//    
//    console.log(person)
//
//}
//{
//    for (let i = 0; i <= 10; i++) {
//        console.log(i)
//    }
//}
//const numbers = [1, 2, 3, 4, 5]
//numbers.forEach(function (number, index) {
//    numbers[index] = number + 1
//})
//
//console.log(numbers)
//const newNumbers = numbers.map(function (number) {
//    return number + 1
//})
//
//console.log(numbers)
//console.log(newNumbers)
//const total = numbers.reduce(function (total, next) {
//    return total + next
//})
//
//console.log(total)
//const todos = [
//    { text : "Lavar louça", done : true},
//    { text : "Pegar o lixo", done : false},
//    { text : "Arrumar as roupas", done : false}
//]
//
//const doneTodos = todos.filter(function (todo) {
//    return todo.done
//})
//console.log(doneTodos)
//const find = todos.find(function (todo) {
//    return todo.text == "...."
//})
//
//console.log(find)
//const index = todos.findIndex(function (todo) {
//    return todo.text == "Pegar o lixo"
//})
//
//console.log(index)
//const cars = ["Fusca", "Civic", "HB20"]
//const hasFusca = cars.some(function (car) {
//    return car == "Fusca"
//})
//
//console.log(hasFusca)
//const doneTodos = todos.filter((todo) => todo.done )
//
//console.log(doneTodos)
//const anything = () => console.log("Hello 2 You")
//const anything = () => [1, 2, 3, 5]
//const anything = () => {{ name: "Sora" }}
//
//console.log(anything())
//function sayHello(name  = "hungry") {
//    console.log("Hii "+ name + "\nI'm Dad\nHow are ya?")
//sayHello() 
//why did you name me like that...
//}
//const sayHello = (name = "Muffing") => console.log("Hello I'm "+name+" and is Muffing Time!")
//sayHello()
//const showProduct = (product, price) => {
//    console.log(`O volor de ${product.toUpperCase()} é ${Math.round(price)}, pode comprar!`)
//}
//
//showProduct("Camisa", 20.6)
//const name = "camisa"
//const price = 20
//
//const product = {
//    name,
//    price,
//    inStock : true
//}
//const fruits = ["Abacaxi", "Morango", "Maçã"]
//
//const a = fruits[0]
//const b = fruits[1]
//const c = fruits[2]
//
//const [a, b, c] = fruits
//
//console.log(a, c)
//const person = {
//    firstName : "Sora",
//    secondName : "...",
//    age : 16,
//    address: {
//        city : "Destiny Islands",
//        region : "KH_1"
//    },
//}
//
//const firstName = person.firstName
//const secondName = person.secondName
//const city = person.address.city
//
//const { firstName, secondName, address: {city} } = person
//console.log(firstName, secondName, city)
//const showFullName = ({ firstName, secondName}) => {
//    console.log(`${firstName} ${secondName}`)
//}
//
//showFullName(person)

var numbers = [1, 2, 3, 4, 5];
var first = numbers[0],
    second = numbers[1],
    rest = numbers.slice(2);
console.log(rest); //const person = {
//    firstName : "Sora",
//    secondName : "...",
//    age : 18,
//    heigth: 1.74,
//    company : "SeaSalt Ice-Cream Co."
//}
