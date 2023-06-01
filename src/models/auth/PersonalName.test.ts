import { describe, it, expect } from 'vitest';
import { PersonalName, PersonalNameError } from './PersonalName';

describe('PersonalName tests', () => {
    it('must contain at least 1 character', () => {
        assertIsNotValidName('');
        assertIsValidName('A');
    })

    it('cannot contain more than 50 characters', () => {
        assertIsValidName('A'.repeat(50));
        assertIsNotValidName('A'.repeat(51));
    })
})

function assertIsNotValidName(name: string): void {
    expect(() => PersonalName.create(name))
        .toThrowError(PersonalNameError);
}

function assertIsValidName(aName: string): void {
    const name: PersonalName = PersonalName.create(aName);

    expect(name.value).toBe(aName);
}