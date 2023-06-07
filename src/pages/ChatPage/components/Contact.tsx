import { Box, BoxProps, Divider, Typography } from "@mui/material";
import { IContact } from "../../../api/ContactsAPI";

export interface IContactProps extends BoxProps {
    isActive: boolean,
    contact: IContact | null | undefined
}

export function Contact(props: IContactProps) {

    const { contact, isActive } = props

    return (
        <>
            <Box
                minHeight={50}
                width={"100%"}
                p={2}
                sx={{
                    ':hover': {
                        background: 'var(--hover)',
                        cursor: 'pointer'
                    },
                    backgroundColor: isActive ? 'var(--hover)' : 'inherit',
                }}
                {...props}
            >
                <Typography>
                    {contact?.name || "Без имени"}
                </Typography>
            </Box>
            <Divider />
        </>
    )
}