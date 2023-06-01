import { Role } from "./Role";

export interface RegistrationData {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly role: Role;
}