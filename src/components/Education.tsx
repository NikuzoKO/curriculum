import type { Lang } from "../App";

function Education({
    education,
    lang,
}: {
    education: {
        institution: string;
        degree: string | { es: string; en: string };
        startDate: string;
        endDate: string;
        completed: boolean;
    }[];
    lang: Lang;
}) {
    const t = (field: string | { es: string; en: string }) =>
        typeof field === "object" ? field[lang] : field;

    const completed = lang === "es" ? "Finalizado" : "Completed";
    const inProgress = lang === "es" ? "En curso" : "In progress";

    return (
        <>
            <h3>{lang === "es" ? "Educación" : "Education"}</h3>
            <div className="education-items">
                {education.map((item, index) => (
                    <div className="education-item" key={index}>
                        <p className="date-text">
                            {item.startDate} - {item.endDate}
                            {" - "}
                            {item.completed ? completed : inProgress}
                        </p>
                        <p className="bold-text">{item.institution}</p>
                        <p>{t(item.degree)}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Education;
