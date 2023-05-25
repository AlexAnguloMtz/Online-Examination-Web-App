import './styles.css';
import { RegisterStep } from "../RegisterStep";
import { RegistrationFormButton } from "../RegistrationFormButton";
import { FirstNameInput } from "./FirstNameInput";
import { LastNameInput } from "./LastNameInput";
import { PasswordInputs } from "./PasswordInputs";
import { EmailInput } from "./UsernameInput";

interface Props {
    onPrimaryAction: () => void,
    onGoBack: () => void
}

export function AccountStep({ onPrimaryAction, onGoBack }: Props) {
    return (
        <RegisterStep className="register__account">
            <FirstNameInput />
            <LastNameInput />
            <EmailInput />
            <PasswordInputs />
            <RegistrationFormButton onClick={onPrimaryAction}>
                Register
            </RegistrationFormButton>
            <RegistrationFormButton onClick={onGoBack}>
                Back
            </RegistrationFormButton>
        </RegisterStep>
    );
}