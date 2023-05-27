import { describe, it, expect, vi, Mock, afterEach } from 'vitest';
import { Either, isLeft, isRight } from 'fp-ts/lib/Either';
import { Password, PasswordValidationError, PasswordValidator } from './Password';
import { anyString } from '../../util/testing-helpers';

describe('Email tests', () => {

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('calls the injected validator when creating a Password', () => {
        const validator: Mock<any, any> = vi.fn();
        validator.mockImplementation((password: string) => true);

        Password.create('secret9%', validator);

        expect(validator).toBeCalledTimes(1);
        expect(validator).toBeCalledWith('secret9%');
    })

    it('creates a Password when validation is successful', () => {
        const validator: PasswordValidator = (email: string) => true;

        const either: Either<PasswordValidationError, Password> = Password.create(anyString(), validator);

        expect(isRight(either)).toBe(true);
    })

    it('returns a validation error when validation fails', () => {
        const validator: PasswordValidator = (email: string) => false;

        const either: Either<PasswordValidationError, Password> = Password.create(anyString(), validator);

        expect(isLeft(either)).toBe(true);
    })

})