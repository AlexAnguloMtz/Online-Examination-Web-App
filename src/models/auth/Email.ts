import { Either, right, left } from 'fp-ts/Either';
import { ValidationError } from '../common/types/ValidationError';
import { validate } from 'email-validator';

export type EmailValidationError = ValidationError;

export class Email {

    private _email: string;

    private constructor(email: string) {
        this._email = email;
    }

    static create(email: string): Either<EmailValidationError, Email> {
        return Email._isValid(email)
            ? right(new Email(email))
            : left('Email must have a valid structure' as EmailValidationError);
    }

    static _isValid(email: string): boolean {
        return validate(email);
    }

    get value(): string {
        return this._email;
    }

}