import {useState} from "react";

export default function List({ contacts }){

    const [filter, setFilter] = useState('');

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some( (key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filter.toLocaleLowerCase())
        )
    });

    return(
        <div className="xl:w-1/2 xl:ml-9">
            <h2>Contact List</h2>
            <input type="text"
                   value={filter}
                   onChange={ (e) => setFilter(e.target.value) }
                   placeholder='Filter contacts'
                   class="input input-bordered input-sm w-full"/>
            <section className="overflow-x-auto">
            <table className="table table-compact">
                    <thead>
                    <tr key='0'>
                        <th></th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Company</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        filtered.map((contact, index) => (
                            <tr key={index+1}>
                                <th>{index+1}</th>
                                <td>{contact.name}</td>
                                <td>{contact.surname}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.email}</td>
                                <td>{contact.company}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </section>
        </div>
    );
}