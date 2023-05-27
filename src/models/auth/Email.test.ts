import { describe, it, expect } from 'vitest';
import { Either, isLeft, isRight } from 'fp-ts/lib/Either';
import { Email, EmailValidationError } from './Email';

function assertEmailIsNotCreated(email: string): void {
    const either: Either<EmailValidationError, Email> = Email.create(email);

    expect(isLeft(either)).toBe(true);
}

describe('Email tests', () => {

    it('cannot be empty', () => {
        assertEmailIsNotCreated('');
    })

    it('must contain a username', () => {
        assertEmailIsNotCreated('@gmail.com');
    })

    it('must contain the @ symbol', () => {
        assertEmailIsNotCreated('john_doegmail.com');
    })

    it('must contain a valid domain', () => {
        assertEmailIsNotCreated('john_doe@');
        assertEmailIsNotCreated('john_doe@gmailcom');
    })

    it('can create Email instance with a valid email string', () => {
        const either: Either<EmailValidationError, Email> = Email.create('john_doe@gmail.com');

        expect(isRight(either)).toBe(true);
    })

})