import { Role } from "./Role"

export type RawRegistrationData = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: Role
}