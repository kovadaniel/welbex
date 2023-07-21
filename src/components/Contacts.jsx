function Contacts({contacts}) {
    return (
        <ul className="contact-refs">
            {contacts.map((contact, i) => 
                <li key={contact.title} className={contact.class + ' contact-ref'}>
                    <a href={contact.ref}>
                        {contact.icon 
                        ? <img src={contact.icon} alt={contact.description}/>
                        : <span>{contact.description}</span>}
                    </a>
                </li>)}
        </ul>
    );
}

export default Contacts;