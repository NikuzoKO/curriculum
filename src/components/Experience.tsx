function Experience({
    experience,
}: {
    experience: {
        company: string;
        position: string;
        description: string;
        startDate: string;
        endDate: string;
    }[];
}) {
    return (
        <>
            <h3>Experiencia</h3>
            {experience.map((item, index) => (
                <div className="experience-item" key={index}>
                    <p>
                        <span className="bold-text">
                            {item.company} - {item.position}
                        </span>
                        {" | "}
                        <span className="date-text">
                            {item.startDate} - {item.endDate}
                        </span>
                    </p>
                    <p>{item.description}</p>
                </div>
            ))}
        </>
    );
}

export default Experience;
