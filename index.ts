#!/usr/bin/env node
// creating student mangemnet system which enroll students gives id show tution fee and much more

import inquirer from "inquirer";

const student = await inquirer.prompt(
    [
        {
            name: "stName",
            type: "input",
            message: "Enter your name: ",
        }
    ]
)

// genearating unique id

function generateUniqueId(): string {
    // Generate a random number between 0 and 9999
    const randomNumber: number = Math.floor(Math.random() * 10000);
  
    // Get current timestamp
    const timestamp: number = new Date().getTime();
  
    // Combine timestamp and random number to create unique ID
    const uniqueId: string = timestamp.toString() + '-' + randomNumber.toString();
  
    return uniqueId;
  }
  
  // Example usage
  const id: string = generateUniqueId();
  console.log(`Your student ID is: ${id}`);

  //selecting a course selection list

  const course = await inquirer.prompt(
    [
        {
            name: "courseName",
            type: "list",
            choices: ["Typescript", "Javascript", "C++"],
            message: "Select your desired course",
        }
    ]
  )
  

console.log(course.courseName);

//tution fee

let tutionFee: number = 20000; //Twenty thousnads
console.log(`Tution fee is ${tutionFee}`);

const fees = await inquirer.prompt(
    [
        {
            name: "paidFee",
            type: "input",
            message: "How much fee would you like to pay?",
        }
    ]
)

let remaingFee = tutionFee -= fees.paidFee
console.log(`Your remainig fee is ${remaingFee}`);


//creating function to show status
console.log("All details is here");

function showStatus(){
    console.log(`Student Name: ${student.stName}\nID: ${id}\nDesired Course: ${course.courseName}\nDue Balance: ${remaingFee} `);
    
}

showStatus()





















