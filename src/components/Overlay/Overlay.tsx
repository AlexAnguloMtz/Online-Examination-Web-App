import './styles.css';

export function Overlay({ opacity, className = '', children }: Props) {
    return (
        <div
            className={`overlay ${className}`}
            style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
        >
            {children}
        </div>
    );
}

interface Props {
    opacity: number,
    children: JSX.Element | Array<JSX.Element>
    className?: string,
}