import { Email, EmailError } from "./Email"
import { Password, PasswordError } from "./Password"
import { RegistrationData } from "./RegistrationData"
import { Role } from "./Role"
import { FullName } from "./FullName";
import { PersonalName } from "./PersonalName";
import { pipe } from "fp-ts/lib/function";
import { Either, fromOption as eitherFromOption, left, right } from 'fp-ts/lib/Either';
import { Option, match } from 'fp-ts/lib/Option';
import { NonEmptyArray, of as nonEmptyArrayOf } from "fp-ts/lib/NonEmptyArray";
import { Errors } from "../common/Errors";
import * as option from 'fp-ts/lib/Option';

export type ValidRegistrationData = {
    readonly fullName: FullName
    readonly email: Email,
    readonly password: Password,
    readonly role: Role
}

export class FirstNameError extends Error { }

export class LastNameError extends Error { }


type Builder = {
    firstName?: PersonalName,
    lastName?: PersonalName,
    email?: Email,
    password?: Password,
    role?: Role
}

