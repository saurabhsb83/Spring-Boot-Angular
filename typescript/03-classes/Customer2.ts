class Customer2 {

private firstName : string;
private lastName  : string;

public getFirstName() : string {

    return this.firstName;

}

public getLastName() : string {

    return this.lastName;

}

public setFirstName(theFirst : string) : void {

    this.firstName = theFirst;
}

public setLastName( theLast : string) : void {

    this.lastName = theLast;

}


}


let myCustomer = new Customer2();

myCustomer.setFirstName("erin");
myCustomer.setLastName("martel");

console.log(`Hello  ${myCustomer.getFirstName()}    ${myCustomer.getLastName()} `);

