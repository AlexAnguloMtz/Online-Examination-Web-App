import { describe, it, expect, vi, Mock, afterEach } from 'vitest';
import { Either, isLeft, isRight } from 'fp-ts/lib/Either';
import { Email, EmailValidationError, EmailValidator } from './Email';
import { anyString } from '../../util/testing-helpers';

describe('Email tests', () => {

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('calls the injected validator when creating an Email', () => {
        const validator: Mock<any, any> = vi.fn();
        validator.mockImplementation((email: string) => true);

        Email.create('john_doe@gmail.com', validator);

        expect(validator).toBeCalledTimes(1);
        expect(validator).toBeCalledWith('john_doe@gmail.com');
    })

    it('creates an Email when validation is successful', () => {
        const validator: EmailValidator = (email: string) => true;

        const either: Either<EmailValidationError, Email> = Email.create(anyString(), validator);

        expect(isRight(either)).toBe(true);
    })

    it('returns a validation error when validation fails', () => {
        const validator: EmailValidator = (email: string) => false;

        const either: Either<EmailValidationError, Email> = Email.create(anyString(), validator);

        expect(isLeft(either)).toBe(true);
    })

})