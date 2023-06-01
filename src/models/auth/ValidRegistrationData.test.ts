import { describe, it, expect } from 'vitest';
import { Either, isLeft, isRight, mapLeft } from 'fp-ts/lib/Either';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { RegistrationRequest } from './RegistrationRequest';
import { Role } from './Role';
import { expectEither, fail } from '../../utils/testing-helpers';
import { FirstNameError, LastNameError, RegistrationData } from './RegistrationData';
import { ValidRegistrationData, validateRegistrationData } from './ValidRegistrationData';
import { Errors } from '../common/Errors';
import { EmailError } from './Email';
import { PasswordError } from './Password';

describe('RegistrationRequest tests', () => {

    it('when first name is invalid, we get a first name error', () => {
        const data: RegistrationData = withInvalidFirstName();

        const either: Either<Errors, ValidRegistrationData> = validateRegistrationData(data);

        expectError(either, FirstNameError);
    })

    it('when last name is invalid, we get a last name error', () => {
        const data: RegistrationData = withInvalidLastName();

        const either: Either<Errors, ValidRegistrationData> = validateRegistrationData(data);

        expectError(either, LastNameError);
    })

    it('when email is invalid, we get an email error', () => {
        const data: RegistrationData = withInvalidEmail();

        const either: Either<Errors, ValidRegistrationData> = validateRegistrationData(data);

        expectError(either, EmailError);
    })

    it('when email is invalid, we get an email error', () => {
        const data: RegistrationData = withInvalidEmail();

        const either: Either<Errors, ValidRegistrationData> = validateRegistrationData(data);

        expectError(either, EmailError);
    })

    it('when password is invalid, we get a password error', () => {
        const data: RegistrationData = withInvalidPassword();

        const either: Either<Errors, ValidRegistrationData> = validateRegistrationData(data);

        expectError(either, PasswordError);
    })

    it('when all data is valid, we get a valid object', () => {
        const data: RegistrationData = withInvalidPassword();

        const either: Either<Errors, ValidRegistrationData> = validateRegistrationData(data);

        expect(isRight(either)).toBe(true);
    })

})

function expectError<T>(either: Either<Errors, ValidRegistrationData>, errorClazz: T) {

    expect(isLeft(either)).toBe(true);

    mapLeft((errors: Errors) => {
        expect(errors).toHaveLength(1);
        expect(errors[0]).toBeInstanceOf(errorClazz);
    });

}

function validRawData(): RegistrationData {
    return {
        firstName: 'john',
        lastName: 'doe',
        email: 'john_doe@gmail.com',
        password: 'Secret_9$',
        role: Role.TEACHER
    };
}

function withInvalidFirstName(): RegistrationData {
    return {
        ...validRawData(),
        firstName: ''
    };
}

function withInvalidLastName(): RegistrationData {
    return {
        ...validRawData(),
        lastName: ''
    };
}

function withInvalidEmail(): RegistrationData {
    return {
        ...validRawData(),
        email: ''
    };
}

function withInvalidPassword(): RegistrationData {
    return {
        ...validRawData(),
        password: ''
    };
}

