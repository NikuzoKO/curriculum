function Education({
    education,
}: {
    education: {
        institution: string;
        degree: string;
        startDate: string;
        endDate: string;
        completed: boolean;
    }[];
}) {
    return (
        <>
            <h3>Educación</h3>
            {education.map((item, index) => (
                <div className="education-item" key={index}>
                    <p className="date-text">
                        {item.startDate} - {item.endDate}
                        {item.completed ? " - Finalizado" : " - En curso"}
                    </p>
                    <p className="bold-text">{item.institution}</p>
                    <p>{item.degree}</p>
                </div>
            ))}
        </>
    );
}

export default Education;
