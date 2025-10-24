import data from "./data/data.json";

import Pointer from "./components/Pointer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import ContactInfo from "./components/ContactInfo";

function App() {
    return (
        <div className="container">
            <div className="side-column">
                <div className="profile-picture-container">
                    <img src={data.picture} alt="Picture of Niki Buela" />
                </div>
                {Object.entries(data.pointers).map(
                    ([key, value]: [string, any]) => (
                        <Pointer
                            key={key}
                            title={value.title}
                            items={value.items}
                        />
                    )
                )}
            </div>
            <div className="main-column">
                <div className="name-container">
                    <h1 className="name">{data.name}</h1>
                    <p className="description">{data.descriptions[0]}</p>
                    <p className="description">{data.descriptions[1]}</p>
                </div>
                <div className="curriculum-container">
                    <Experience experience={data.experience} />
                    <Education education={data.education} />
                    <Courses courses={data.courses} />
                    <Projects projects={data.projects} />
                    <Contacts contact={data.contacts} />
                    <ContactInfo
                        contactInfo={
                            data.contactInfo as {
                                email: string;
                                phone: string;
                                linkedin: string;
                                github: string;
                            }
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
