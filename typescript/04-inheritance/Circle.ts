import { Shape } from './Shape'

export class Circle extends Shape {

    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);

    }

    get x(): number {

        return this.x;
    }

    get y(): number {

        return this.y;
    }

    get radius(): number {

        return this._radius;

    }


    getInfo() : string {

        return super.getInfo() + ` , radius=${this._radius}`;

    }

    getArea() : number {

        return Math.PI * Math.pow(this._radius, 2);

    }



}