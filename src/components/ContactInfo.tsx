function ContactInfo({
    contactInfo,
}: {
    contactInfo: {
        email: string;
        phone: string;
        linkedin: string;
        github: string;
    };
}) {
    return (
        <>
            <h3>Información de contacto</h3>
            <div className="contact-info-items">
                <p>
                    Cel:{" "}
                    <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </p>
                <p>
                    Correo:{" "}
                    <a href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                    </a>
                </p>
                <p>
                    Linkedin:{" "}
                    <a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {contactInfo.linkedin}
                    </a>
                </p>
                <p>
                    Github:{" "}
                    <a
                        href={contactInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {contactInfo.github}
                    </a>
                </p>
            </div>
        </>
    );
}

export default ContactInfo;
