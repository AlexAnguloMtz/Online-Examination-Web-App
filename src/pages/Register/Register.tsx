import './styles.css';
import { useState } from 'react';
import { Slider } from '../../components/Slider/Slider';
import { RoleStep } from './RoleStep/RoleStep';
import { CountryStep } from './CountryStep/CountryStep';

export function Register() {

    const [step, setStep] = useState<number>(0);

    function moveForward() {
        setStep(step + 1);
    }

    function moveBackwards() {
        setStep(step - 1);
    }

    return (
        <section className="register">
            <Slider step={step} slidePadding='1em 1em 3em 1em'>
                <RoleStep onContinue={moveForward} />
                <CountryStep onContinue={moveForward} onGoBack={moveBackwards} />
            </Slider>
        </section>
    );
}