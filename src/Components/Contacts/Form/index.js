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
          return false;
          /*
          <div className="alert alert-warning shadow-lg">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                       viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                  </svg>
                  <span>Warning: Invalid email address!</span>
              </div>
          </div>
          */ }

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
                   placeholder="Phone Number" type="number" required/>
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