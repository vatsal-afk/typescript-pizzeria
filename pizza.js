"use strict";
const menu = [
    { id: 1, name: "Margharita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 }
];
var cashInRegister = 100;
let orderQueue = [];
var nextOrderId = 1;
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
    return menu;
}
function getPizzaDetail(identifier) {
    const selectedPizza = menu.find(pizzaObj => identifier === pizzaObj.name || identifier === pizzaObj.id);
    console.log(selectedPizza);
}
function placeOrder(pizzaName) {
    let selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (selectedPizza) {
        const newOrder = { pizza: pizzaName, status: "ordered", id: nextOrderId };
        cashInRegister += selectedPizza.price;
        orderQueue.push(newOrder);
        nextOrderId += 1;
        return newOrder;
    }
    else {
        throw new Error(`Pizza ${pizzaName} not found`);
    }
}
function completeOrder(orderId) {
    let selectedOrder = orderQueue.find(order => order.id === orderId);
    if (selectedOrder) {
        selectedOrder.status = "completed";
        return selectedOrder;
    }
    else {
        throw new Error(`Order with ID ${orderId} not found`);
    }
}
console.log("Menu: ", menu, "\n");
console.log("Order queue:", orderQueue);
console.log("\nCash in register: ", cashInRegister, "\n");
getPizzaDetail(3);
