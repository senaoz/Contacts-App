import {useState} from "react";

export default function Form(){
    const [form, setForm] = useState({name: "", surname: "", phone: "", company: ""});

    const onChangeInput = (event) => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    const onSubmit = () => {
      console.log(form)
    }

    return(
        <form onSubmit={onSubmit}>
            <h2>Form</h2>
            <input className="formInput" name="name" placeholder="Name" type="text" required/>
            <input className="formInput" name="surname" placeholder="Surname" type="text"/>
            <input className="formInput" name="phone" placeholder="Phone Number" type="number" required/>
            <input className="formInput" name="company" placeholder="Company" type="text"/>
            <button className="btn btn-sm btn-active btn-accent" type="submit">Add New Contact</button>
        </form>
    );
}