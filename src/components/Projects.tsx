import type { Lang } from "../App";

function Projects({
    projects,
    lang,
}: {
    projects: {
        name: string;
        description: string | { es: string; en: string };
        url: string;
        startDate: string;
        endDate: string;
    }[];
    lang: Lang;
}) {
    const t = (field: string | { es: string; en: string }) =>
        typeof field === "object" ? field[lang] : field;

    const viewProject = lang === "es" ? "Ver proyecto" : "View project";

    return (
        <>
            <h3>{lang === "es" ? "Proyectos" : "Projects"}</h3>
            {projects.map((item, index) => (
                <div className="project-item" key={index}>
                    <p>
                        <span className="bold-text">
                            {item.name}
                            {item.url && (
                                <>
                                    {" | "}
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        className="link-text"
                                    >
                                        {viewProject}
                                    </a>
                                </>
                            )}
                        </span>
                        {" | "}
                        <span className="date-text">
                            {item.startDate} - {item.endDate}
                        </span>
                    </p>
                    <p>{t(item.description)}</p>
                </div>
            ))}
        </>
    );
}

export default Projects;
