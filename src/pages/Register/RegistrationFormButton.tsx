import { Button } from "../../components/Button/Button";
import { ButtonType } from "../../components/Button/ButtonType";

interface Props {
    onClick: () => void,
    className?: string,
    children: JSX.Element | Array<JSX.Element> | string
}

export function RegistrationFormButton({ onClick, className = '', children }: Props) {
    return (
        <Button
            onClick={onClick}
            type={ButtonType.PRIMARY}
            className={`register__button ${className}`}>
            {children}
        </Button>
    );
}