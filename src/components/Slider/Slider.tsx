import { Slide } from './Slide';
import './styles.css';

const FULL_WIDTH: number = 100;

export function Slider({ step, children }: Props) {
    return (
        <div className="slider">
            {children.map(element => toSlide(element, step))}
        </div>
    );
}

function toSlide(element: JSX.Element, step: number) {
    return (
        <Slide
            children={element}
            translateX={translateX(step)} />
    );
}

function translateX(step: number) {
    return -step * FULL_WIDTH;
}

interface Props {
    step: number,
    children: Array<JSX.Element>
}