import './styles.css';
import { useState } from 'react';
import { Slider } from '../../components/Slider/Slider';
import { RoleStep } from './RoleStep/RoleStep';
import { AccountStep } from './AccountStep/AccountStep';

export function Register() {

    const [step, setStep] = useState<number>(0);

    function handleRegistration() {

    }

    function moveForward() {
        setStep(step + 1);
    }

    function moveBackwards() {
        setStep(step - 1);
    }

    return (
        <section className="register">
            <Slider
                step={step}
                slidePadding='1em 1em 3em 1em'>
                <RoleStep onContinue={moveForward} />
                <AccountStep
                    onPrimaryAction={handleRegistration}
                    onGoBack={moveBackwards} />
            </Slider>
        </section>
    );
}