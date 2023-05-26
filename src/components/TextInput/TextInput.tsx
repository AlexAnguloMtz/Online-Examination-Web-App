import { TextField } from "@mui/material";
import { InputType } from "./InputType";

interface Props {
    label: string,
    type?: InputType
}

export function TextInput({ label, type = InputType.TEXT }: Props) {
    return (
        <TextField
            type={type}
            fullWidth
            label={label}
            variant="outlined" />
    );
}