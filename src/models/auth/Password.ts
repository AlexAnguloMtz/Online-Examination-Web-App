import { Either, right, left } from "fp-ts/lib/Either";
import { ValidationError } from "../common/types/ValidationError";

export type PasswordValidationError = ValidationError;

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
        return true;
    }

    get value(): string {
        return this._password;
    }

}