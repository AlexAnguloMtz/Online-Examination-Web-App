export function Slide({ translateX, children }: Props) {
    return (
        <div className="slide" style={{ transform: `translateX(${translateX}%)` }}>
            {children}
        </div>
    );
}

interface Props {
    translateX: number
    children: JSX.Element | Array<JSX.Element>
}