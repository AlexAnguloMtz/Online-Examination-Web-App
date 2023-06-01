import { List } from "../../common/List";
import { RawRegistrationData, RawRegistrationData as RegistrationData } from "./RegistrationData";
import { PersonalName } from "./PersonalName";
import { pipe } from "fp-ts/lib/function";
import { Email, EmailError } from "./Email";
import { Password, PasswordError } from "./Password";
import { isEmpty, head } from "fp-ts/lib/Array";
import { Role } from "./Role";

type ErrorsCombinator = (errors: List<Error>) => List<Error>

export class FirstNameError extends Error { }

export class LastNameError extends Error { }

export class ValidRegistrationData {

    private constructor(
        readonly _firstName: PersonalName,
        readonly _lastName: PersonalName,
        readonly _email: Email,
        readonly _password: Password,
        readonly _role: Role
    ) { }

    public static make(data: RegistrationData): ValidRegistrationData {
        if (!isEmpty(this.validate(data))) {
            throw this._firstErrorOf(data);
        }
        return new ValidRegistrationData(
            PersonalName.create(data.firstName),
            PersonalName.create(data.lastName),
            Email.create(data.email),
            Password.create(data.password),
            data.role
        );
    }

    public static validate(data: RegistrationData): List<Error> {
        return pipe(
            [] as List<Error>,
            this._validateFirstName(data),
            this._validateLastName(data),
            this._validateEmail(data),
            this._validatePassword(data),
        );
    }

    private static _validateFirstName(data: RegistrationData): ErrorsCombinator {
        return this._maybeCombineErrors(
            PersonalName.isValid(data.firstName),
            new FirstNameError()
        );
    }

    private static _validateLastName(data: RegistrationData): ErrorsCombinator {
        return this._maybeCombineErrors(
            PersonalName.isValid(data.lastName),
            new LastNameError()
        );
    }

    private static _validateEmail(data: RegistrationData): ErrorsCombinator {
        return this._maybeCombineErrors(
            Email.isValid(data.email),
            new EmailError()
        );
    }

    private static _validatePassword(data: RegistrationData): ErrorsCombinator {
        return this._maybeCombineErrors(
            Password.isValid(data.password),
            new PasswordError()
        );
    }

    private static _maybeCombineErrors(condition: boolean, error: Error): ErrorsCombinator {
        return (errors: List<Error>) => condition ? errors : [...errors, error];
    }

    private static _firstErrorOf(data: RawRegistrationData): Error {
        return this.validate(data)[0];
    }

    public get firstName(): string {
        return this._firstName.value;
    }

    public get lastName(): string {
        return this._lastName.value;
    }

    public get email(): string {
        return this._email.value;
    }

    public get password(): string {
        return this._password.value;
    }

    public get role(): Role {
        return this._role;
    }

}