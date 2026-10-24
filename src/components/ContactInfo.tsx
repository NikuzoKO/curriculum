function ContactInfo({
    contactInfo,
}: {
    contactInfo: {
        ci: string;
        date: string;
        location: string;
        phone: string;
        email: string;
        linkedin: string;
        github: string;
    };
}) {
    return (
        <div className="contact-info">
            <h3>Info. de Contacto</h3>
            <div className="contact-info-items">
                <div>
                    <div>
                        <p>CI.:</p>
                        <p>{contactInfo.ci}</p>
                    </div>
                    <div>
                        <p>Nacimiento:</p>
                        <p>{contactInfo.date}</p>
                    </div>
                    <div>
                        <p>Ubi.:</p>
                        <p>{contactInfo.location}</p>
                    </div>
                    <div>
                        <p>Cel.: </p>
                        <a
                            type="tel"
                            href={`tel:${contactInfo.phone}`}
                            target="_blank"
                        >
                            {contactInfo.phone}
                        </a>
                    </div>
                    <div>
                        <p>Mail: </p>
                        <a
                            type="email"
                            href={`mailto:${contactInfo.email}`}
                            target="_blank"
                        >
                            {contactInfo.email}
                        </a>
                    </div>
                    <div>
                        <p>Linkedin: </p>
                        <a
                            type="url"
                            href={`https://${contactInfo.linkedin}`}
                            target="_blank"
                        >
			 Niki Buela
                        </a>
                    </div>
                    <div>
                        <p>Github: </p>
                        <a
                            type="url"
                            href={`https://${contactInfo.github}`}
                            target="_blank"
                        >
                            NikuzoKO
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;
