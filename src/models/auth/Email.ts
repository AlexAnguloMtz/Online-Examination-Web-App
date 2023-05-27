import { Either, right, left } from 'fp-ts/Either';
import { Nothing } from '../common/Nothing';
import { ValidationError } from '../common/ValidationError';

export type EmailValidator = (email: string) => boolean;

export type EmailValidationError = ValidationError;

export class Email {

    private _email: string;

    private constructor(email: string) {
        this._email = email;
    }

    static create(email: string, validator: EmailValidator): Either<EmailValidationError, Email> {
        return validator(email)
            ? right(new Email(email))
            : left('Email must have a valid structure' as EmailValidationError);
    }

    get value(): string {
        return this._email;
    }

}