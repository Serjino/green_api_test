import { Box, Typography } from "@mui/material";
import { IContactProps } from "./Contact";

interface IChatWindowHeaderProps extends Omit<IContactProps, 'isActive'> {

}

export function ChatWindowHeader(props: IChatWindowHeaderProps) {

    const { contact } = props

    return (
        <Box
            height="72px"
            display={"flex"}
            alignItems={"center"}
            justifyContent={'space-between'}
            width="100%"
            bgcolor={'var(--panel-header-background)'}
            p={2}
        >
            <Typography>
                {contact?.name || "Без имени"}
            </Typography>
            <Typography>
                {contact?.id.split('@')[0]}
            </Typography>
        </Box>
    )
}