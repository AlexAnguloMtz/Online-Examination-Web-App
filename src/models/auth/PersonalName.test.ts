import { describe, it, expect } from 'vitest';
import { PersonalName, PersonalNameValidationError } from './PersonalName';
import { Either, isLeft, isRight } from 'fp-ts/lib/Either';

function assertIsNotCreated(value: string): void {
    const either: Either<PersonalNameValidationError, PersonalName> = PersonalName.create(value);

    expect(isLeft(either)).toBe(true);
}

function assertIsCreated(value: string): void {
    const either: Either<PersonalNameValidationError, PersonalName> = PersonalName.create(value);

    expect(isRight(either)).toBe(true);
}

describe('PersonalName tests', () => {
    it('must contain at least 1 character', () => {
        assertIsNotCreated('');
        assertIsCreated('A');
    })

    it('cannot contain more than 50 characters', () => {
        assertIsCreated('A'.repeat(50));
        assertIsNotCreated('A'.repeat(51));
    })
})