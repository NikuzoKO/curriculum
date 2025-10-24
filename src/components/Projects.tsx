function Projects({
    projects,
}: {
    projects: {
        name: string;
        description: string;
        url: string;
        startDate: string;
        endDate: string;
    }[];
}) {
    return (
        <>
            <h3>Proyectos</h3>
            {projects.map((item, index) => (
                <div className="project-item" key={index}>
                    <p className="bold-text">{item.name}</p>
                    <p>{item.description}</p>
                    <p className="date-text">
                        {item.startDate} - {item.endDate}
                    </p>
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button"
                    >
                        Ver proyecto
                    </a>
                </div>
            ))}
        </>
    );
}

export default Projects;
