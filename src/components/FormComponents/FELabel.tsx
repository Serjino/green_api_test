import { Typography, TypographyProps } from "@mui/material";

export function FELabel(props: TypographyProps) {

    const { children } = props

    return (
        <Typography
            id="formElementLabel"
            display="flex"
            alignItems={"center"}
            textAlign={"left"}
            variant="body2"
            {...props}
        >
            {children}
        </Typography>
    )
}