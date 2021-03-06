"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Shape.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (xValue) {
            this._x = xValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (yValue) {
            this._y = yValue;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.getInfo = function () {
        return "x=" + this._x + " , y=" + this._y;
    };
    return Shape;
}());
exports.Shape = Shape;
