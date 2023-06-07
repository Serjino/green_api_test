import { Box, BoxProps } from "@mui/material";

export interface IFormElementProps extends BoxProps {
    children: React.ReactNode | React.ReactNode[]
}

export function FormElement(props: IFormElementProps) {

    const { children } = props

    return (
        <Box
            display={"flex"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"space-between"}
            {...props}
        >
            {children}
        </Box>
    )
}