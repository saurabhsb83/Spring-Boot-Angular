export abstract class Shape {

    constructor(private _x: number, private _y: number) {

    }

    get x(): number {

        return this._x;

    }

    get y(): number {

        return this._y;
    }


    set x(xValue: number) {

        this._x = xValue;
    }

    set y(yValue: number) {

        this._y = yValue;

    }

    getInfo() : string {

        return `x=${this._x} , y=${this._y}`
    }

    abstract getArea() : number;

}