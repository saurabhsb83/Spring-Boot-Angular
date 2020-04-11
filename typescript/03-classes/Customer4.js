"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer4 = /** @class */ (function () {
    function Customer4(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer4.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (fName) {
            this._firstName = fName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer4.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lName) {
            this._lastName = lName;
        },
        enumerable: true,
        configurable: true
    });
    return Customer4;
}());
exports.Customer4 = Customer4;
