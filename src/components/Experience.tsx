import type { Lang } from "../App";

function Experience({
    experience,
    lang,
}: {
    experience: {
        company: string;
        position: string | { es: string; en: string };
        description: string | { es: string; en: string };
        startDate: string;
        endDate: string;
    }[];
    lang: Lang;
}) {
    const t = (field: string | { es: string; en: string }) =>
        typeof field === "object" ? field[lang] : field;

    return (
        <>
            <h3>{lang === "es" ? "Experiencia" : "Experience"}</h3>
            {experience.map((item, index) => (
                <div className="experience-item" key={index}>
                    <p>
                        <span className="bold-text">
                            {item.company} - {t(item.position)}
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

export default Experience;
