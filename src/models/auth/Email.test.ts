import { describe, it, expect } from 'vitest';
import { Email, EmailError } from './Email';

describe('Email tests', () => {

    it('cannot be empty', () => {
        assertEmailIsInvalid('');
    })

    it('must contain a username', () => {
        assertEmailIsInvalid('@gmail.com');
    })

    it('must contain the @ symbol', () => {
        assertEmailIsInvalid('john_doegmail.com');
    })

    it('must contain a valid domain', () => {
        assertEmailIsInvalid('john_doe@gmailcom');
    })

    it('can create an Email instance with a valid email string', () => {
        const email: Email = Email.create('john_doe@gmail.com');

        expect(email.value).toBe('john_doe@gmail.com');
    })

})

function assertEmailIsInvalid(email: string): void {
    expect(Email.isValid(email)).toBe(false);
    expect(() => Email.create(email)).toThrowError(EmailError);
}
