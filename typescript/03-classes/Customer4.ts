export class Customer4 {

    constructor(private _firstName: string, private _lastName: string) {

    }

    get firstName(): string {

        return this._firstName;

    }

    get lastName(): string {

        return this._lastName;

    }


    set firstName(fName: string) {

        this._firstName = fName;
    }

    set lastName(lName: string) {

        this._lastName = lName;

    }

}


