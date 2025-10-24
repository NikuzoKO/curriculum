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
                    <p className="date-text">
                        {item.startDate} - {item.endDate}
                    </p>
                    <p className="bold-text">
                        {item.company} - {item.position}
                    </p>
                    <p>{item.description}</p>
                </div>
            ))}
        </>
    );
}

export default Experience;
