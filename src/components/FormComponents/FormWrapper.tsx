import React from "react";
import { Box, BoxProps } from "@mui/material";
import { SubmitHandler, useFormContext } from "react-hook-form";

interface IFormWrapperProps {
    onSubmit: SubmitHandler<any>
    children: React.ReactNode,
    BoxProps?: BoxProps,
    FormProps?: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
}
export function FormWrapper(props: IFormWrapperProps) {

    const { children, onSubmit, BoxProps, FormProps } = props

    const formContext = useFormContext()

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            {...BoxProps}

        >
            <form
                onSubmit={formContext?.handleSubmit(onSubmit)}
                {...FormProps}
            >
                {children}
            </form>
        </Box>
    )
}