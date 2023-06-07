import { useState, useEffect, useCallback } from "react";
import { IContact, ContactsAPI } from "../../api/ContactsAPI";
import { LayoutWrapper } from "../../components/LayoutWrapper";
import { AsideMenu } from "./components/AsideMenu";
import { ChatWindow } from "./components/ChatWindow";
import { ChatWrapper } from "./components/ChatWrapper";
import { ContactList } from "./components/ContactList";
import { ContactSearch } from "./components/ContactSearch";
import { UserInfo } from "./components/UserInfo";

export function ChatPage() {

    const [contacts, setContacts] = useState(null as null | IContact[])
    const [filteredContacts, setFilteredContacts] = useState(null as null | IContact[])
    const [activeContact, setActiveContact] = useState(null as null | IContact)

    const searchContactByName = useCallback((searchName: string) => {
        contacts && setFilteredContacts(prev => contacts?.filter(contact => contact.name.toLowerCase().includes(searchName.toLowerCase())))
    }, [contacts])

    const switchActiveContact = useCallback((contact: null | IContact) => {
        contact && setActiveContact(contact)
    }, [])

    function sortAndFilter (contacts: null | IContact[]) {
        return contacts?.sort((prev, next) => prev.name.localeCompare(next.name))
        .filter(contact => !!contact.name) || []

    }
    
    useEffect(() => {
        ContactsAPI.get()
            .then(data => {
                setContacts(prev => sortAndFilter(data))
                setFilteredContacts(prev => sortAndFilter(data))
                setActiveContact(prev => sortAndFilter(data)[0] || {})
            })
    }, [])

    return (
        <LayoutWrapper>
            <ChatWrapper>
                <AsideMenu>
                    <UserInfo />
                    <ContactSearch searchContactByName={searchContactByName} />
                    <ContactList activeContact={activeContact} contacts={filteredContacts} switchActiveContact={switchActiveContact} />
                </AsideMenu>
                <ChatWindow activeContact={activeContact} />
            </ChatWrapper>
        </LayoutWrapper>
    )
}

