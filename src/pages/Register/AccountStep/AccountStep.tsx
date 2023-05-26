import './styles.css';
import image from '../../../assets/image/student-at-library.jpg';
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
            <img
                className='register__image'
                src={image}
                alt="student" />
            <div className='register__account-inputs'>
                <FirstNameInput />
                <LastNameInput />
                <EmailInput />
                <PasswordInputs />
                <RegistrationFormButton
                    className='register__account-primary-action'
                    onClick={onPrimaryAction}>
                    Register
                </RegistrationFormButton>
                <RegistrationFormButton onClick={onGoBack}>
                    Back
                </RegistrationFormButton>
            </div>
        </RegisterStep>
    );
}