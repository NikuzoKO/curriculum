function Contacts({ contact }: { contact: { name: string; phone: string }[] }) {
    return (
        <>
            <h3>Contactos</h3>
            <div className="contact-items">
                {contact.map((item, index) => (
                    <div className="contact-item" key={index}>
                        <p className="bold-text">{item.name}</p>
                        <p>
                            Cel:
                            <a
                                type="tel"
                                href={`tel:${item.phone}`}
                                target="_blank"
                            >
                                {item.phone}
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Contacts;
