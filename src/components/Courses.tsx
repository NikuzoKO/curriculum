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
            {courses.map((item, index) => (
                <div className="course-item" key={index}>
                    <p>
                        {item.startDate} - {item.endDate}
                    </p>
                    <p className="bold-text">{item.name}</p>
                    <p>{item.description}</p>
                </div>
            ))}
        </>
    );
}

export default Courses;
