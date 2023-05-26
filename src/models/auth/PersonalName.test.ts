import { describe, it, expect } from 'vitest';
import { PersonalName } from './PersonalName';
import { Either, isLeft, isRight } from 'fp-ts/lib/Either';
import { Nothing } from '../common/Nothing';

describe('PersonalName tests', () => {
    it('Personal name must contain at least 1 character', () => {
        const empty: Either<Nothing, PersonalName> = PersonalName.create('');
        const oneChar: Either<Nothing, PersonalName> = PersonalName.create('A');

        expect(isLeft(empty)).toBe(true)
        expect(isRight(oneChar)).toBe(true);
    })

    it('Personal name cannot contain more than 50 characters', () => {
        const tooLong: Either<Nothing, PersonalName> = PersonalName.create('A'.repeat(51));
        const correctLength: Either<Nothing, PersonalName> = PersonalName.create('A'.repeat(50));

        expect(isLeft(tooLong)).toBe(true);
        expect(isRight(correctLength)).toBe(true)
    })
})