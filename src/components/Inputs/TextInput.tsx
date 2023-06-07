import { TextField, TextFieldProps } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { ValidationErrorMessage } from "./ValidationErrorMessage";
import { IValidatableInputProps } from "./z.def";

export interface ITextInputProps extends Omit<TextFieldProps, 'variant'>, IValidatableInputProps {

}

const defaultValidation = {
    // maxLength: {
    //     value: 100,
    //     message: "Не более 100 символов"
    // },
    required: "Обязательное поле"
}

export function TextInput(props: ITextInputProps) {

    const { fieldName, validation } = props

    const formContext = useFormContext()

    const defaultValue = formContext?.formState?.defaultValues && formContext?.formState?.defaultValues[fieldName]

    return (
        <>
            <TextField
                size="small"
                fullWidth
                error={!!formContext?.formState?.errors[fieldName]?.message}
                defaultValue={defaultValue || ""}
                // {...(formContext?.register && formContext?.register(fieldName, { ...defaultValidation, ...validation }))}
                {...formContext?.register(fieldName, { ...defaultValidation, ...validation })}
                {...props}
            />
            <ValidationErrorMessage
                message={formContext?.formState?.errors[fieldName]?.message as string}
            />
        </>
    )
}