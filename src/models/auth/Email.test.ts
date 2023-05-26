import { describe, it, expect } from 'vitest';
import { PersonalName } from './PersonalName';
import { Either, isLeft, isRight } from 'fp-ts/lib/Either';
import { Nothing } from '../common/Nothing';
import { Email } from './Email';

describe('Email tests', () => {
    it('Email cannot be empty', () => {
        const either: Either<Nothing, Email> = Email.create('');

        expect(isLeft(either)).toBe(true);
    })
})