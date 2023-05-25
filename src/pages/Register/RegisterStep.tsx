interface Props {
    children: JSX.Element | Array<JSX.Element>
    className?: string
}

export function RegisterStep({ className = '', children }: Props) {
    return (
        <div className={`register__step ${className}`}>
            {children}
        </div>
    );
}