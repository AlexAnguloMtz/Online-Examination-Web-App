import { Either, right, left } from 'fp-ts/Either';
import { ValidationError } from '../common/types/ValidationError';
import { StringValidator } from '../common/types/StringValidator';

export type EmailValidator = StringValidator;

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