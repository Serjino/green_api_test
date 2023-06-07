import { Box, BoxProps } from "@mui/material";

export function LayoutWrapper(props: BoxProps) {

    const { children } = props

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"100vh"}
            {...props}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1
                }}
            >
                <Box
                    bgcolor={'var(--main)'}
                    height="127px"
                >
                </Box>
                <Box
                    bgcolor={'var(--background)'}
                    height={'calc(100% - 127px)'}
                >
                </Box>
            </Box>
            {children}
        </Box>
    )
}