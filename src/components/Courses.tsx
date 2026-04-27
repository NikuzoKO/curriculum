import type { Lang } from "../App";

function Courses({
    courses,
    lang,
}: {
    courses: {
        name: string;
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
            <h3>{lang === "es" ? "Cursos" : "Courses"}</h3>
            <div className="course-items">
                {courses.map((item, index) => (
                    <div className="course-item" key={index}>
                        <p>
                            <span className="bold-text">{item.name}</span>
                            {" | "}
                            <span className="date-text">
                                {item.startDate} - {item.endDate}
                            </span>
                        </p>
                        <p>{t(item.description)}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Courses;
