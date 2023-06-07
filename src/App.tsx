import { Box } from "@mui/material";
import { ActivePage } from "./global/routing";

export function App () {
    return (
        <Box
            height={'100vh'}
            overflow={'hidden'}
        >
            <ActivePage />
        </Box>
    )
}