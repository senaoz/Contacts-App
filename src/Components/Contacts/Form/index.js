import {useEffect, useState} from "react";

const initialFormValues = {name: "", surname: "", phone: "", email: "", company: ""};

export default function Form( {addContact, contacts} ){

    const [form, setForm] = useState(initialFormValues);

    useEffect( () => {
        console.log(contacts);
        setForm(initialFormValues);
    }, [ contacts ])

    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (form.name === '' || form.phone === '') {
          return false; }

        addContact([ ...contacts, form ]);
    }

    return(
        <form className="lg:w-1/2 lg:mr-9" onSubmit={onSubmit}>
            <h2>Form</h2>
            <input className="formInput"
                   name="name"
                   placeholder="Name"
                   onChange={onChangeInput}
                   value={form.name}
                   type="text" required/>
            <input className="formInput"
                   name="surname"
                   onChange={onChangeInput}
                   value={form.surname}
                   placeholder="Surname" type="text"/>
            <input className="formInput"
                   name="phone"
                   onChange={onChangeInput}
                   value={form.phone}
                   placeholder="Phone Number" type="number" maxlength="10" required/>
            <input className="formInput"
                   name="email"
                   onChange={onChangeInput}
                   value={form.email}
                   placeholder="Email" type="email"/>
            <input className="formInput"
                   name="company"
                   onChange={onChangeInput}
                   value={form.company}
                   placeholder="Company" type="text"/>
            <button className="btn btn-sm btn-active btn-accent" type="submit">Add New Contact</button>
        </form>
    );
}
