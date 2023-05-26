import { Either, left, right } from "fp-ts/lib/Either";
import { Nothing } from "../common/Nothing";

export class PersonalName {

    private _value;

    private constructor(value: string) {
        this._value = value;
    }

    static create(value: string): Either<Nothing, PersonalName> {
        return PersonalName._isValid(value)
            ? right(new PersonalName(value))
            : left(null as Nothing);
    }

    private static _isValid(value: string): boolean {
        return value.length > 0 && value.length <= 50;
    }

    get value(): string {
        return this._value;
    }

}