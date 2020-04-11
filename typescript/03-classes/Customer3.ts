class Customer3 {

    private _firstName : string;
    private _lastName  : string;


    constructor(theFirst : string , theLast : string) {

        this._firstName = theFirst;
        this._lastName  = theLast;

    }

    get firstName() : string {

        return this._firstName;

    }

    get lastName() : string {

        return this._lastName;

    }


    set firstName(fName : string) {

        this._firstName = fName;
    }

    set lastName(lName : string) {

        this._lastName = lName;

    }

}


let myCustomer3 = new Customer3();
myCustomer3.firstName = "Miriam";
myCustomer3.lastName = "LeMay";

console.log(`hello:   ${myCustomer3.firstName} ${myCustomer3.lastName}  `);