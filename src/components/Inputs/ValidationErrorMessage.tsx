import { Typography } from "@mui/material";

interface IValidationErrorMessage {
    message?: string
}

export function ValidationErrorMessage(props: IValidationErrorMessage) {

    const { message } = props

    return (
        message
            ?
            <Typography
                color="error"
                fontSize={"12px"}
                textAlign={"right"}
            >
                {message}
            </Typography>
            : null
    )
}