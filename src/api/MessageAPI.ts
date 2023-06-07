import { TTypeMessage } from "./ChatJournalsAPI"
import { req } from "./api"


export type TMessageMethods = 'sendMessage' | 'receiveNotification' | 'deleteNotification'

export interface IMessage {
    chatId: string,
}

interface ITextMessage extends IMessage {
    message: string
}

export interface INotificationMessage {
    chatId?: string,
    typeWebhook: "incomingMessageReceived" | "outgoingMessageReceived" | "outgoingAPIMessageReceived",
    instanceData: {
        idInstance: number,
        wid: string,
        typeInstance: "whatsapp"
    },
    timestamp: number,
    idMessage: string,
    senderData: {
        chatId: string,
        chatName: string,
        sender: string,
        senderName: string
    },
    messageData: {
        typeMessage: TTypeMessage,
        textMessageData: {
            textMessage: string
        },
        extendedTextMessageData?: {
            description: string,
            jpegThumbnail: string,
            previewType: 'None',
            text: '2',
            title: ''
        }
    }
}

export class MessageAPI {

    static async send(body: ITextMessage): Promise<any> {

        const method = 'sendMessage'

        return await req.post(method, body)
    }

    static async receiveNotification(): Promise<{
        receiptId: number,
        body: INotificationMessage
    }> {

        const method = 'receiveNotification'

        return await req.get(method)
            .then((data) => data.data)
    }

    static async deleteNotification(receiptID: number): Promise<any> {

        const method = 'deleteNotification'

        return await req.delete(method, String(receiptID))
    }
  
}