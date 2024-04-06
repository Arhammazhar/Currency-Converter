#! /usr/bin/env node

import inquirer from "inquirer";

let condition: boolean = true;

const currency: any = {
  USD: 1,
  EURO: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
};
while(condition){
let user_answer = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "Enter Input Currency for Conversion:",
    choices: ["USD", "EURO", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    type: "list",
    message: "Enter Output Currency for Conversion:",
    choices: ["USD", "EURO", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    type: "number",
    message: "Please Enter Amount:",
  },
]);

let fromAmount = currency[user_answer.from];

let toAmount = currency[user_answer.to];

let amount = user_answer.amount;

let baseAmount = amount / fromAmount;

let convertedAmount = baseAmount * toAmount;

console.log(convertedAmount);



let ConfirmationMessage = await inquirer.prompt([{
  name: "confirmation",
  type: "confirm",
  message: "Do you want to do more conversion?",
  default: "true",
}])
condition = ConfirmationMessage.confirmation;
}