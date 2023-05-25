export function Slide({ translateX, padding = '0', children }: Props) {
    return (
        <div
            className="slider__slide"
            style={
                {
                    transform: `translateX(${translateX}%)`,
                    padding
                }}>
            {children}
        </div>
    );
}

interface Props {
    translateX: number,
    padding?: string,
    children: JSX.Element | Array<JSX.Element>
}