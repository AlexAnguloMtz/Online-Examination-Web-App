import { Either, right, left } from "fp-ts/lib/Either";
import { ValidationError } from "../common/types/ValidationError";
import passwordValidator from 'password-validator';

export type PasswordValidationError = ValidationError;

const validator = new passwordValidator();

validator
    .is().min(8)
    .is().max(30)
    .has().uppercase(1)
    .has().lowercase(1)
    .has().digits(1)
    .has().symbols(1)
    .has().not().spaces();

export class Password {

    private _password: string;

    private constructor(password: string) {
        this._password = password;
    }

    static create(password: string): Either<PasswordValidationError, Password> {
        return Password._isValid(password)
            ? right(new Password(password))
            : left('Invalid password' as PasswordValidationError);
    }

    static _isValid(password: string): boolean {
        return validator.validate(password) as boolean;
    }

    get value(): string {
        return this._password;
    }

}