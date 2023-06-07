import { Typography, Button, Box } from "@mui/material";
import { useHistory } from "react-router-dom";

export function Page404() {

    const history = useHistory()

    return (
        <Box>
            <Typography variant="h1">404</Typography>
            <Button
                onClick={(e) => history.replace('/chat')}
            >
                Вернуться на экран "Чат"
            </Button>
        </Box>
    )
}