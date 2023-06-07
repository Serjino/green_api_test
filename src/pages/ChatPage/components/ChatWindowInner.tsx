import { Box, BoxProps } from "@mui/material";

export function ChatWindowInner(props: BoxProps) {

    const { children } = props

    return (
        <Box
            px={8}
            py={2}
            height="calc(100% - 144px)"
            overflow={"scroll"}
            display={'flex'}
            flexDirection={'column'}
            gap={1}
            {...props}
        >
            {children}
        </Box>
    )
}