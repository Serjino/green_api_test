import { Box } from "@mui/material";
import { IContact } from "../../../api/ContactsAPI";
import { Contact } from "./Contact";

interface IContactsListProps {
    activeContact: IContact | null,
    contacts: IContact[] | null,
    switchActiveContact: (contact: null | IContact) => void
}

export function ContactList(props: IContactsListProps) {

    const { activeContact, contacts, switchActiveContact } = props

    return (
        <Box
            height="100%"
            overflow={'scroll'}
        >
            {contacts?.map(contact =>
                    <Contact
                        key={contact.id}
                        isActive={contact.id == activeContact?.id}
                        contact={contact}
                        onClick={(e) => switchActiveContact(contact)}
                    />
                )}
        </Box>
    )
}