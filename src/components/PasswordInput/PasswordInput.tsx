import './styles.css';
import { TextInput } from "../TextInput/TextInput";
import { InputType } from '../TextInput/InputType';
import { Eye } from './Eye';
import { EyeSlash } from './EyeSlash';

interface Props {
    label: string,
    isHiding: boolean,
    onIconClick: () => void
}

export function PasswordInput({ label, isHiding, onIconClick }: Props) {

    return (
        <div className="password-input">
            <TextInput
                label={label}
                type={isHiding ? InputType.PASSWORD : InputType.TEXT} />
            <button
                className='password-input__button'
                onClick={onIconClick}>
                {iconFor(isHiding)}
            </button>
        </div>
    );
}

function iconFor(isHiding: boolean) {
    const className: string = 'password-input__icon';
    return (isHiding)
        ? <Eye className={className} />
        : <EyeSlash className={className} />
}