import passwordValidator from 'password-validator';

const validator = new passwordValidator();

validator
    .is().min(8)
    .is().max(30)
    .has().uppercase(1)
    .has().lowercase(1)
    .has().digits(1)
    .has().symbols(1)
    .has().not().spaces();

export class PasswordError extends Error { };

export class Password {

    private _value: string;

    private constructor(password: string) {
        this._value = password;
    }

    public static create(password: string): Password {
        if (!Password.isValid(password)) {
            throw new PasswordError('Invalid password');
        }
        return new Password(password);
    }

    public static isValid(password: string): boolean {
        return validator.validate(password) as boolean;
    }

    public get value(): string {
        return this._value;
    }

}