import { TextField } from "@mui/material";
import { ITextInputProps } from "./TextInput";
import NumberFormat, { NumberFormatProps } from "react-number-format";
import { Controller, useFormContext } from "react-hook-form";
import { ValidationErrorMessage } from "./ValidationErrorMessage";

const defaultValidation = {
    required: "Обязательное поле"
}

interface INumberInputProps extends Partial<NumberFormatProps & Omit<ITextInputProps, 'variant' | 'ref'>> {
}

export function NumberInput(props: INumberInputProps) {

    const { fieldName = "", validation } = props

    const formContext = useFormContext()

    return (
        <Controller
            name={fieldName}
            control={formContext?.control}
            rules={{
                ...defaultValidation,
                ...validation
            }}
            render={({ field: { onChange, value } }) => {
                return (
                    <>
                        <NumberFormat
                            customInput={TextField}
                            size="small"
                            fullWidth
                            onValueChange={(values) => {
                                onChange(values.floatValue)
                            }}
                            value={value}
                            allowLeadingZeros={false}
                            thousandSeparator={' '}
                            allowNegative={false}
                            error={!!formContext?.formState?.errors[fieldName]?.message}
                            sx={{
                                "input": {
                                    textAlign: "left"
                                }
                            }}
                        />
                        <ValidationErrorMessage
                            message={formContext?.formState?.errors[fieldName]?.message as string}
                        />
                    </>
                )
            }}
        />
    )
}