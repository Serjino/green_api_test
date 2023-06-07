import { Send } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { IContact } from "../../../api/ContactsAPI";
import { useState } from "react";
import { MessageAPI } from "../../../api/MessageAPI";
import { IChatMessage } from "./ChatWindow";

interface IInputMessageProps {
    activeContact: IContact | null,
}

export function InputMessage(props: IInputMessageProps) {

    const { activeContact } = props

    const [message, setMessage] = useState('')

    function sendMessage() {
        activeContact?.id
            && MessageAPI.send({
                chatId: activeContact?.id,
                message: message
            })
                .then(() => setMessage(v => ''))
    }

    return (
        <Box
            p={2}
            bgcolor={'var(--panel-header-background)'}
            display={'flex'}
            alignItems={'center'}
        >
            <TextField
                value={message}
                size="small"
                fullWidth
                sx={{
                    'input': {
                        bgcolor: "white"
                    },
                    mr: 2
                }}
                onChange={(e) => setMessage(prev => e.target.value)}
            />
            <Send
                sx={{
                    cursor: 'pointer',
                    transition: 'all 0.2s linear',
                    ":hover": {
                        color: 'var(--main)'
                    },
                    pointerEvents: !message ? 'none' : 'default'
                }}
                color={!message ? "disabled" : 'inherit'}
                onClick={sendMessage}
            />
        </Box>
    )
}