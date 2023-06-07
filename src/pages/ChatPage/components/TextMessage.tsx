import { Box, BoxProps, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { IChatMessage } from "./ChatWindow";

interface ITextMessageProps extends BoxProps {
    isLastMessage: boolean,
    message: IChatMessage
}

export function TextMessage(props: ITextMessageProps) {

    const { message, isLastMessage } = props

    const ref = useRef<HTMLDivElement>()

    useEffect(() => {
        ref.current?.scrollIntoView({block: 'end', inline: 'end', behavior: 'smooth'})
    }, [isLastMessage])

    return (
        <Box
            display={"flex"}
            ref={ref}
            {...props}
        >
            <Typography
                p={1}
                sx={{
                    br: 0.5,
                    background: message.type == 'incoming' ? "white" : "var(--outgoing-background)"
                }}
            >
                {message.message}
            </Typography>
        </Box>
    )
}