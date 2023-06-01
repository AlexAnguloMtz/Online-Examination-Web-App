import { describe, expect, it } from 'vitest';
import { Role } from './Role';
import { FirstNameError, LastNameError, ValidRegistrationData } from './ValidRegistrationData';
import { List } from '../../common/List';
import { RawRegistrationData } from './RegistrationData';
import { EmailError } from './Email';
import { PasswordError } from './Password';

describe('given we obtain user input for registration', () => {

    it('when first name is invalid, then we get a first name error', () => {
        const data: RawRegistrationData = { ...validRegistrationData(), firstName: '' };

        expectError(data, new FirstNameError());
    })

    it('when last name is invalid, then we get a last name error', () => {
        const data: RawRegistrationData = { ...validRegistrationData(), lastName: '' };

        expectError(data, new LastNameError());
    })

    it('when email is invalid,then we get an email error', () => {
        const data: RawRegistrationData = { ...validRegistrationData(), email: '' };

        expectError(data, new EmailError());
    })

    it('when password is invalid, then we get a password error', () => {
        const data: RawRegistrationData = { ...validRegistrationData(), password: '' };

        expectError(data, new PasswordError());
    })

    it('when all data is valid, then we do not get any errors', () => {
        const data: RawRegistrationData = validRegistrationData();

        const errors: List<Error> = ValidRegistrationData.validate(data);

        expect(errors).toHaveLength(0);
    })

    it('when all data is valid, we can make an object with all the validated data', () => {
        const data: RawRegistrationData = validRegistrationData();

        const validData: ValidRegistrationData = ValidRegistrationData.make(data);

        expect(data.firstName).toBe(validData.firstName);
        expect(data.lastName).toBe(validData.lastName);
        expect(data.email).toBe(validData.email);
        expect(data.password).toBe(validData.password);
        expect(data.role).toBe(validData.role);
    })

})

function validRegistrationData() {
    return {
        firstName: 'john',
        lastName: 'doe',
        email: 'john_doe@gmail.com',
        password: 'Secret_9$',
        role: Role.TEACHER
    };
}


function expectError(data: RawRegistrationData, error: Error) {
    const errors: List<Error> = ValidRegistrationData.validate(data);

    expect(errors).toHaveLength(1);
    expect(typeof errors[0]).toBe(typeof error);
    expect(() => ValidRegistrationData.make(data)).toThrowError(error);
}