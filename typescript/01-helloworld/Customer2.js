var Customer2 = /** @class */ (function () {
    function Customer2() {
    }
    Customer2.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer2.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer2.prototype.setFirstName = function (theFirst) {
        this.firstName = theFirst;
    };
    Customer2.prototype.setLastName = function (theLast) {
        this.lastName = theLast;
    };
    return Customer2;
}());
var myCustomer = new Customer2();
myCustomer.setFirstName("erin");
myCustomer.setLastName("martel");
console.log("Hello  " + myCustomer.getFirstName() + "    " + myCustomer.getLastName() + " ");
