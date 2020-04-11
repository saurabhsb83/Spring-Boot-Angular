var Customer3 = /** @class */ (function () {
    function Customer3() {
    }
    Object.defineProperty(Customer3.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (fName) {
            this._firstName = fName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer3.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lName) {
            this._lastName = lName;
        },
        enumerable: true,
        configurable: true
    });
    return Customer3;
}());
var myCustomer3 = new Customer3();
myCustomer3.firstName = "Miriam";
myCustomer3.lastName = "LeMay";
console.log("hello:   " + myCustomer3.firstName + " " + myCustomer3.lastName + "  ");
