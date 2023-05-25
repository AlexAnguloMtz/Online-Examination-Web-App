import { useState } from 'react';
import { CountrySelection } from './CountrySelection/CountrySelection';
import { RoleSelection } from './RoleSelection/RoleSelection';
import './styles.css';
import { Slider } from '../../components/Slider/Slider';

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
            <Slider step={step} slidePadding='1em'>
                <RoleSelection onContinue={moveForward} />
                <CountrySelection onContinue={moveForward} onGoBack={moveBackwards} />
            </Slider>
        </section>
    );
}