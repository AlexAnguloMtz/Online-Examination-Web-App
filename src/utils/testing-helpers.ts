import * as E from 'fp-ts/lib/Either';
import * as P from 'fp-ts/lib/Predicate';

export function fail(message: string): undefined {
    throw new Error(message);
}

export type EitherMatcher = {
    toBeRight: () => void,
    toBeLeft: () => void
}

export const expectEither = <A, B>(either: E.Either<A, B>): EitherMatcher => {

    const toBeRight = (): void => test(E.isRight, 'Expected either to be right, but was left');

    const toBeLeft = (): void => test(E.isLeft, 'Expected either to be left, but was right');

    const test = (predicate: P.Predicate<E.Either<A, B>>, message: string): void => {
        if (!predicate(either)) {
            throw new Error(message);
        }
    }

    return { toBeLeft, toBeRight };

}