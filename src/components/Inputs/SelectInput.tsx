import { Menu, MenuItem, OutlinedTextFieldProps, TextField, TextFieldProps } from "@mui/material";
import { TextInput } from "./TextInput";
import { IValidatableInputProps } from "./z.def";

interface ISelectProps extends Partial<OutlinedTextFieldProps>, IValidatableInputProps {
    type?: "primary" | "secondary"
    options: {
        label: string,
        value: string,
        [key: string]: string
    }[],

}

export function SelectInput(props: ISelectProps) {

    const { options, variant = "outlined", type = "secondary" } = props

    return (
        <TextInput
            select
            fullWidth
            focused={false}
            inputProps={{
                fieldName: props.fieldName,
                validation: props.validation
            }}
            {...props}
        >
            {options.map(option => {
                return (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                )
            })}
            
        </TextInput>
    )
}