import List from "./List/index";
import Form from "./Form";
import {useState} from "react";

export default function Contacts(){
    const [contacts, setContacts] = useState([]);

    return(
        <>
            <h1>Contacts</h1>
            <Form addContact={setContacts} contacts={contacts} />
            <List contacts={contacts} />
        </>
    );
}