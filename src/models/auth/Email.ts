import { Either, right, left } from 'fp-ts/Either';
import { Nothing } from '../common/Nothing';

export class Email {

    private _email: string;

    private constructor(email: string) {
        this._email = email;
    }

    static create(email: string): Either<Nothing, Email> {
        return Email._isValid(email)
            ? right(new Email(email))
            : left(null as Nothing);
    }

    private static _isValid(email: string) {
        return email.length > 0;
    }

    get value(): string {
        return this._email;
    }

}