import { TextField } from "@mui/material";

interface Props {
    label: string
}

export function TextInput({ label }: Props) {
    return (
        <TextField
            fullWidth
            label={label}
            variant="outlined" />
    );
}