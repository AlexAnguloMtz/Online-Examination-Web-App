import './styles.css';
import { RegisterStep } from '../RegisterStep';
import { RegistrationFormButton } from '../RegistrationFormButton';

interface Props {
    onContinue: () => void,
    onGoBack: () => void
}

export function CountrySelection({ onContinue, onGoBack }: Props) {
    return (
        <RegisterStep>
            <RegistrationFormButton onClick={onContinue}>
                Continue
            </RegistrationFormButton>
            <RegistrationFormButton onClick={onGoBack}>
                Back
            </RegistrationFormButton>
        </RegisterStep>
    );
}