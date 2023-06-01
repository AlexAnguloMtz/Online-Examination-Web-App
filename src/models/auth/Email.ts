import { validate } from 'email-validator';

export class EmailError extends Error { }

export class Email {

    private _email: string;

    private constructor(email: string) {
        this._email = email;
    }

    public static create(email: string): Email {
        if (!Email.isValid(email)) {
            throw new EmailError('Invalid email');
        }
        return new Email(email);
    }

    public static isValid(email: string): boolean {
        return validate(email);
    }

    public get value(): string {
        return this._email;
    }

}