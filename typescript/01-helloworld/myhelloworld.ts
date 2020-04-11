console.log("Hello World")
let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Sam";
let lastName: string = "Shepherd"

let myData: any = 50;

//Assign values to the types variables
found = false;
grade = 99;
firstName = "Eric";
lastName = "Noh";
myData = false;
myData = "Eric";

console.log("Printing values: " +grade +" " +firstName +" " +lastName +" " +myData);

console.log("using template strings");
console.log(`Hi ${firstName}  ${lastName} ${grade} ${found}`);


