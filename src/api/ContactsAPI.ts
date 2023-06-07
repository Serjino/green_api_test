import { req } from "./api"

export type TContactsMethods = 'getContacts'

export interface IContact {
    id: string,
    name: string,
    type: 'group' | 'user'
}


export class ContactsAPI {

    static async get(): Promise<IContact[]> {

        const method = 'getContacts'

        return await req.get(method)
            .then((data) => {
                return data?.data
            })
        // .catch((error) => errorHandler(error))
    }


}