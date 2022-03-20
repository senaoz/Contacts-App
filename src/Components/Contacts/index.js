import List from "./List/index";
import Form from "./Form";
import {useState} from "react";

export default function Contacts(){
    const [contacts, setContacts] = useState([
        {name: "Sena", surname: "OZ", phone: "5051234567", email: "tazeyta@gmail.com", company: "UZC"},
        {name: "Usame", surname: "OZ", phone: "5531234567", email: "usameoz@gmail.com", company: "BINO"}
    ]);

    return(
        <>
            <h1 className="mb-0">Contacts</h1>
            <div className='lg:flex'>
                <Form addContact={setContacts} contacts={contacts} />
                <List contacts={contacts} />
            </div>
        </>
    );
}