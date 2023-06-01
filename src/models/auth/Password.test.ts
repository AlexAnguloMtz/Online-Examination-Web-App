import { describe, it, expect } from 'vitest';
import { Password, PasswordError } from './Password';

describe('Password tests', () => {

    it('cannot create a Password with less than 8 characters', () => {
        assertHasInvalidLength('Secr_9#', 7);
    })

    it('cannot create a Password with more than 30 characters', () => {
        const password: string = 'Secret#9' + '_'.repeat(23);
        assertHasInvalidLength(password, 31);
    })

    it('cannot create a Password without at least one digit', () => {
        assertPasswordIsNotCreated('Secret_#');
    })

    it('cannot create a Password without at least one upper case letter', () => {
        assertPasswordIsNotCreated('secret_#9');
    })

    it('cannot create a Password without at least one lower case letter', () => {
        assertPasswordIsNotCreated('SECRET_#9');
    })

    it('cannot create a Password without at least one symbol', () => {
        assertPasswordIsNotCreated('Secret99');
    })

    it('cannot create a Password with spaces', () => {
        assertPasswordIsNotCreated('Secr et#9');
    })

    it('can create a Password with a valid password string', () => {
        const password: Password = Password.create('Secret_9');

        expect(password.value).toBe('Secret_9');
    })

})

function assertPasswordIsNotCreated(password: string): void {
    expect(Password.isValid(password)).toBe(false);
    expect(() => Password.create(password)).toThrowError(PasswordError);
}

function assertHasInvalidLength(value: string, expectedLength: number): void {
    expect(value.length).toBe(expectedLength);
    assertPasswordIsNotCreated(value);
}
