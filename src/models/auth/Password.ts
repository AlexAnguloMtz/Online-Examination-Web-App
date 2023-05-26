export class Password {

    private _password: string;

    private constructor(password: string) {
        this._password = password;
    }

    static create(password: string): Password {
        return new Password(password);
    }

    get value(): string {
        return this._password;
    }

}