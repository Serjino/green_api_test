import { Box } from "@mui/material";
import { ChatWindowHeader } from "./ChatWindowHeader";
import { IContact } from "../../../api/ContactsAPI";
import { useEffect, useState } from "react";
import { IChatHistoryMessage } from "../../../api/ChatJournalsAPI";
import { TextMessage } from "./TextMessage";
import { InputMessage } from "./InputMessage";
import { ChatWindowInner } from "./ChatWindowInner";
import { MessageAPI } from "../../../api/MessageAPI";

interface IChatWindowProps {
    activeContact: IContact | null
}

export interface IChatMessage {
    id: string,
    message: string,
    timestamp: number,
    type: IChatHistoryMessage['type'],
    chatId?: string
}

export function ChatWindow(props: IChatWindowProps) {

    const { activeContact } = props

    const [chatHistory, setChatHistory] = useState(null as null | IChatMessage[])

    function subscribeToNewNotifications() {
        MessageAPI.receiveNotification()
            .then(data => {
                console.log(data)
                return data
            })
            .then((data) => {

                if (data) {

                    let newMessage = {
                        id: data.body.idMessage,
                        timestamp: data.body.timestamp,
                    } as IChatMessage

                    if (data.body.typeWebhook == "incomingMessageReceived") {
                        console.log(activeContact)
                        newMessage.message = data.body.messageData?.textMessageData?.textMessage
                        newMessage.type = 'incoming'
                        newMessage.chatId = data.body.senderData.chatId
                        setChatHistory(prev => [...prev || [], newMessage])
                    }

                    if (data.body.typeWebhook == "outgoingAPIMessageReceived") {
                        newMessage.message = data.body.messageData?.extendedTextMessageData?.text as string
                        newMessage.type = 'outgoing'
                        newMessage.chatId = data.body.senderData.chatId
                        setChatHistory(prev => [...prev || [], newMessage])
                    }
                }
                return data
            })
            .then((data) => data && MessageAPI.deleteNotification(data?.receiptId))
            .then(() => subscribeToNewNotifications())
    }

    useEffect(() => {
        subscribeToNewNotifications()
    }, [])



    return (
        <Box
            width="100%"
            bgcolor={"var(--chat-background)"}
        >
            <ChatWindowHeader
                contact={activeContact}
            />
            <ChatWindowInner>
                {
                    chatHistory?.filter(message => message.chatId == activeContact?.id)
                        .map((message, index) => {
                            return (
                                <TextMessage isLastMessage={index == chatHistory.length - 1} key={message.id} message={message} />
                            )
                        }
                        )
                }
            </ChatWindowInner>
            <InputMessage activeContact={activeContact} />
        </Box>
    )
}