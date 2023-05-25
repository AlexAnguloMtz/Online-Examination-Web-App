import './styles.css';
import { TextInput } from "../TextInput/TextInput";
import eye from '../../assets/icons/eye-solid.svg';
import eyeSlash from '../../assets/icons/eye-slash-solid.svg';

interface Props {
    label: string
}

export function PasswordInput({ label }: Props) {
    return (
        <div className="password-input">
            <TextInput label={label} />
            <button>
                <img
                    src={eye}
                    alt="show" />
            </button>
        </div>
    );
}