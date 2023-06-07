import { FieldValues, RegisterOptions } from "react-hook-form";

export interface IValidatableInputProps {
    fieldName: string,
    validation?: RegisterOptions<FieldValues, string>,
} 