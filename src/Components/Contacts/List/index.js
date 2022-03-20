
export default function List( {contacts} ){
    return(
        <>
            <h2>Contact List</h2>
            <table className="table table-compact w-full">
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
                        contacts.map((contact, index) => (
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
        </>
    );
}