import { useState, useEffect } from "react";
import data from "./data/data.json";

import Pointer from "./components/Pointer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Referers from "./components/Referers";
import ContactInfo from "./components/ContactInfo";

export type Lang = "es" | "en";

function App() {
    const [lang, setLang] = useState<Lang>("es");

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "l" || e.key === "L") {
                setLang((prev) => (prev === "es" ? "en" : "es"));
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, []);

    return (
        <div className="container">
            <div className="side-column">
                <div className="profile-picture-container">
                    <img src={data.picture} alt="Picture of Niki Buela" />
                </div>
                <ContactInfo
                    contactInfo={
                        data.contactInfo as {
                            ci: string;
                            date: string;
                            location: string;
                            email: string;
                            phone: string;
                            linkedin: string;
                            github: string;
                        }
                    }
                />
                {Object.entries(data.pointers).map(
                    ([key, value]: [string, any]) =>
                        value.hidden ? null : (
                            <Pointer
                                key={key}
                                title={
                                    typeof value.title === "object"
                                        ? value.title[lang]
                                        : value.title
                                }
                                items={
                                    Array.isArray(value.items)
                                        ? value.items
                                        : value.items[lang]
                                }
                            />
                        ),
                )}
            </div>
            <div className="main-column">
                <div className="name-container">
                    <h1 className="name">{data.name}</h1>
                    {(data.descriptions as any)[lang].map(
                        (description: string) => (
                            <p className="description" key={description}>
                                {description}
                            </p>
                        ),
                    )}
                </div>
                <div className="curriculum-container">
                    <Experience experience={data.experience} lang={lang} />
                    <Education education={data.education} lang={lang} />
                    <Courses courses={data.courses} lang={lang} />
                    <Projects projects={data.projects} lang={lang} />
                    <Referers referers={data.referers} />
                </div>
            </div>
        </div>
    );
}

export default App;
