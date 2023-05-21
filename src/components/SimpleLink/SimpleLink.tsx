import './styles.css';
import { Link } from "react-router-dom";

export function SimpleLink({
    to,
    children,
    type = '',
    className = ''
}: Props): JSX.Element {
    return (
        <Link
            className={`link ${type} ${className}`}
            to={to}
        >
            {children}
        </Link>
    );
}

interface Props {
    to: string,
    children: string | JSX.Element | Array<JSX.Element>
    type?: string,
    className?: string
}