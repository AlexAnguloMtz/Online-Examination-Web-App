import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { useToggle } from "../../../hooks/use-toggle";

export function PasswordInputs() {

    const [isHiding, toggle] = useToggle(true);

    return (
        <>
            <PasswordInput
                label='Password'
                isHiding={isHiding}
                onIconClick={toggle} />
            <PasswordInput
                label='Confirm password'
                isHiding={isHiding}
                onIconClick={toggle} />
        </>
    );
}