function Courses({
    courses,
}: {
    courses: {
        name: string;
        description: string;
        startDate: string;
        endDate: string;
    }[];
}) {
    return (
        <>
            <h3>Cursos</h3>
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
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Courses;
