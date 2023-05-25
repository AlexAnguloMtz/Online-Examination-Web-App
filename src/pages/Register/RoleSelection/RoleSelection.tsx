import { RegisterStep } from "../RegisterStep";
import { RegistrationFormButton } from "../RegistrationFormButton";

interface Props {
    onContinue: () => void
}

export function RoleSelection({ onContinue }: Props) {
    return (
        <RegisterStep>
            <h1>Are you a teacher or a student?</h1>
            <RegistrationFormButton onClick={onContinue}>
                Continue
            </RegistrationFormButton>
        </RegisterStep>
    );
}