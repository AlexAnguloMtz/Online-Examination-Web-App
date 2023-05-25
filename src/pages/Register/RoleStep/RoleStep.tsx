import { RegisterStep } from "../RegisterStep";
import { RegistrationFormButton } from "../RegistrationFormButton";
import { RoleSelect } from "./RoleSelect";

interface Props {
    onContinue: () => void
}

export function RoleStep({ onContinue }: Props) {
    return (
        <RegisterStep className="register__role">
            <h1>Are you a teacher or a student?</h1>
            <RoleSelect />
            <RegistrationFormButton onClick={onContinue}>
                Continue
            </RegistrationFormButton>
        </RegisterStep>
    );
}