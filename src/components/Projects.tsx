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
                    <p>
                        <span className="bold-text">
                            {item.name}
                            {" | "}
                            <a
                                type="url"
                                href={item.url}
                                target="_blank"
                                className="link-text"
                            >
                                Ver proyecto
                            </a>
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

export default Projects;
