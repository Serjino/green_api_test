import { IMessage } from "./MessageAPI"
import { req } from "./api"

export type TChatJournalsMethods = 'getChatHistory' | 'lastIncomingMessages'

export type TMessageStatus = 'outgoing' | 'pending' | 'sent' | 'delivered' | 'read'
export type TTypeMessage = 'textMessage' | 'imageMessage' | 'videoMessage' | 'documentMessage' | 'audioMessage' | 'locationMessage' | 'contactMessage' | 'extendedTextMessage'

export interface IChatHistoryMessage extends IMessage {
    type: 'outgoing' | 'incoming',
    timestamp: number // UNIX,
    idMessage: string,
    statusMessage?: TMessageStatus,
    typeMessage: TTypeMessage,
    senderID?: string
    senderName?: string,
    textMessage?: string,
    downloadURL?: string,
    caption?: string,
    location?: Object,
    contact?: Object,
    extendedTextMessage?: Object
}

export interface IGetChatHistoryBody {
    chatId: IMessage['chatId'],
    count: number
}

export class ChatJournalAPI {

    static async getChatHistory(body: IGetChatHistoryBody): Promise<IChatHistoryMessage[]> {

        const method = 'getChatHistory'

        return await
            req.post(method, body)
                .then((data) => {
                    return data?.data
                })
    }

    static async getLastMessages(type: IChatHistoryMessage['type'], minutes?: number): Promise<IChatHistoryMessage[]> {

        const method = type == 'outgoing' ? 'lastOutgoingMessages' : 'lastIncomingMessages'

        const query = {
            minutes: minutes
        }

        return await
            req.get(method, query)
                .then((data) => {
                    return data.data
                })
    }

}