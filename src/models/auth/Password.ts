import { Either, right, left } from "fp-ts/lib/Either";
import { StringValidator } from "../common/types/StringValidator";
import { ValidationError } from "../common/types/ValidationError";

export type PasswordValidator = StringValidator;

export type PasswordValidationError = ValidationError;

export class Password {

    private _password: string;

    private constructor(password: string) {
        this._password = password;
    }

    static create(password: string, validator: PasswordValidator): Either<PasswordValidationError, Password> {
        return validator(password)
            ? right(new Password(password))
            : left('Invalid password' as PasswordValidationError);
    }

    get value(): string {
        return this._password;
    }

}