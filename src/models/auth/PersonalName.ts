export class PersonalNameError extends Error { };

export class PersonalName {

    private _value;

    private constructor(value: string) {
        this._value = value;
    }

    static create(name: string): PersonalName {
        if (!PersonalName.isValid(name)) {
            throw new PersonalNameError('Invalid name');
        }
        return new PersonalName(name);
    }

    public static isValid(value: string): boolean {
        return value.length > 0 && value.length <= 50;
    }

    public get value(): string {
        return this._value;
    }

}