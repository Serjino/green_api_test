import { Box, BoxProps } from "@mui/material";

export function ChatWrapper(props: BoxProps) {

    const { children } = props

    return (
        <Box
            px={10}
            py={2.5}
            width={'100vw'}
            height={'100vh'}
            // overflow={'hidden'}
        >
            <Box
                width={'100%'}
                height={"100%"}
                bgcolor="white"
                // marginY={'20px'}
                display={"flex"}
                overflow={'hidden'}
                {...props}
            >
                {children}
            </Box>
        </Box>
    )
}