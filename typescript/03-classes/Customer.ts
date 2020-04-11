class Customer {

   //properties
   firstName: string;
   lastName:  string;


   constructor(theFirst: string, theLast:string) {
       
       this.firstName = theFirst;
       this.lastName =  theLast;

   }

}


let fName: string = "Martin"; 
let lName: string = "Dixon";

let myCustomer = new Customer(fName, lName);

console.log(`"Customer details: " ${myCustomer.firstName}  ${myCustomer.lastName}`);