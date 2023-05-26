import { Email } from "./Email";
import { Password } from "./Password";
import { PersonalName } from "./PersonalName";
import { Role } from "./Role";

type RegistrationRequest = {
    readonly firstName: PersonalName,
    readonly lastName: PersonalName,
    readonly email: Email,
    readonly password: Password,
    readonly role: Role
}