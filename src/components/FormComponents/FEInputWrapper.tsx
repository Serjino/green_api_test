import { Box, BoxProps } from "@mui/material"

interface IFormInputWrapperProps extends BoxProps {
    size?: "small" | "medium" | "large"
}

export function FEInputWrapper(props: IFormInputWrapperProps) {

    const { size = "small", children } = props

    return (
        <Box
            {...(size == "small" && { width: "168px" })}
            {...(size == "medium" && { width: "288px" })}
            {...(size == "large" && { width: "100%", mt: 0.5 })}
            sx={{
                "input": {
                    textAlign: size == "small" || size == "medium" ? "right" : "left"
                },

            }}
            {...props}
        >
            {children}
        </Box>
    )
}