import './styles.css';
import { ButtonType } from './ButtonType';

export function Button({
    onClick,
    className = '',
    type = ButtonType.PRIMARY,
    children
}: Props): JSX.Element {
    return (
        <button
            className={`button ${type} ${className}`}
            onClick={onClick}>
            {children}
        </button>
    );
}

interface Props {
    onClick: () => void,
    className?: string,
    type?: string,
    children: string | JSX.Element | Array<JSX.Element>,
}