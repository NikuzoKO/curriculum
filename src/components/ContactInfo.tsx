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
                <div>
                    <div>
                        <p>Cel: </p>
                        <a
                            type="tel"
                            href={`tel:${contactInfo.phone}`}
                            target="_blank"
                        >
                            {contactInfo.phone}
                        </a>
                    </div>
                    <div>
                        <p>Correo: </p>
                        <a
                            type="email"
                            href={`mailto:${contactInfo.email}`}
                            target="_blank"
                        >
                            {contactInfo.email}
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Linkedin: </p>
                        <a
                            type="url"
                            href={`https://${contactInfo.linkedin}`}
                            target="_blank"
                        >
                            {contactInfo.linkedin}
                        </a>
                    </div>
                    <div>
                        <p>Github: </p>
                        <a
                            type="url"
                            href={`https://${contactInfo.github}`}
                            target="_blank"
                        >
                            {contactInfo.github}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactInfo;
