import { describe, it, expect } from 'vitest';
import { PersonalName, PersonalNameValidationError } from './PersonalName';
import { Either, isLeft, isRight } from 'fp-ts/lib/Either';

describe('PersonalName tests', () => {
    it('must contain at least 1 character', () => {
        const empty: Either<PersonalNameValidationError, PersonalName> = PersonalName.create('');
        const withOneChar: Either<PersonalNameValidationError, PersonalName> = PersonalName.create('A');

        expect(isLeft(empty)).toBe(true)
        expect(isRight(withOneChar)).toBe(true);
    })

    it('cannot contain more than 50 characters', () => {
        const tooLong: Either<PersonalNameValidationError, PersonalName> = PersonalName.create('A'.repeat(51));
        const correctLength: Either<PersonalNameValidationError, PersonalName> = PersonalName.create('A'.repeat(50));

        expect(isLeft(tooLong)).toBe(true);
        expect(isRight(correctLength)).toBe(true)
    })
})