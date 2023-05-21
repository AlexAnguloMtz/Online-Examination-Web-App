import './styles.css';
import { ButtonType } from './ButtonType';

export function Button({
    className = '',
    type = ButtonType.PRIMARY,
    children
}: Props): JSX.Element {
    return (
        <button className={`button ${type} ${className}`}>
            {children}
        </button>
    );
}

interface Props {
    className?: string,
    type?: string,
    children: string | JSX.Element | Array<JSX.Element>,
}