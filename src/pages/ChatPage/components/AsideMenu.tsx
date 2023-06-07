import { Box, BoxProps } from "@mui/material";

export function AsideMenu (props: BoxProps) {

    const {children} = props

    return (
        <Box
            width={"40%"}
            minWidth={'360px'}
            height={'100%'}
            sx={{
                borderRight: '1px solid rgba(0,0,0,0.15)',
            }}
        >
            {children}
        </Box>
    )
}