import './styles.css';
import { useState } from 'react';
import { Slider } from '../../components/Slider/Slider';
import { RoleStep } from './RoleStep/RoleStep';
import { AccountStep } from './AccountStep/AccountStep';
import { useCounter } from '../../hooks/use-counter';

export function Register() {

    const [step, increment, decrement] = useCounter(0);

    function handleRegistration() {

    }

    return (
        <section className="register">
            <Slider
                step={step}
                slidePadding='1em 1em 3em 1em'>

                <RoleStep onContinue={increment} />
                <AccountStep
                    onPrimaryAction={handleRegistration}
                    onGoBack={decrement} />
            </Slider>
        </section>
    );
}