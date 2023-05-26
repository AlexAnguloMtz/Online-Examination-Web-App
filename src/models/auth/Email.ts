export class Email {

    private _email: string;

    private constructor(email: string) {
        this._email = email;
    }

    static create(email: string): Email {
        return new Email(email);
    }

    get value(): string {
        return this._email;
    }

}