import "./styles/reset.css";
import "./styles/share.css";
import "./styles/formStyles.css";
import "./styles/resume.css";

import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";
import ExperienceForm from "./components/ExperienceForm";
import ProjectsForm from "./components/ProjectsForm";
import Form from "./components/Form";
import ResumePreview from "./components/ResumePreview";

function App() {
  const [generalData, setGeneralData] = useState({
    name: "Your Name",
    email: "your@email.com",
    phone: "+0123456789",
    linkedin: "https://www.linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
  });

  const [educationData, setEducationData] = useState([
    {
      school: "Your School/College",
      degree: "Your Degree",
      location: "Location",
      startDate: "2022-08",
      endDate: "2025-05",
    },
    {
      school: "Your School/College",
      degree: "Your Degree",
      location: "Location",
      startDate: "2022-08",
      endDate: "2025-05",
    },
  ]);

  const [skillsData, setSkillsData] = useState({
    type: "Type",
    skills: "Skill 1, Skill 2, Skill 3, Skill 4, Skill 5",
  });

  const [experienceData, setExperienceData] = useState({
    name: "Company Name",
    type: "Type of the Job",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione in reprehenderit quos dolores blanditiis dolor esse! Commodi omnis quibusdam eaque delectus doloribus! Rem quam odit facere saepe reiciendis dolorum.",
  });

  const [projectsData, setProjectsData] = useState({
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione in reprehenderit quos dolores blanditiis dolor esse! Commodi omnis quibusdam eaque delectus doloribus! Rem quam odit facere saepe reiciendis dolorum.",
  });

  function handleAddEducation() {
    setEducationData([
      ...educationData,
      {
        school: "Your School/College",
        degree: "Your Degree",
        location: "Location",
        startDate: "2022-08",
        endDate: "2025-05",
      },
    ]);
  }

  return (
    <div className="app">
      <div>
        <Form>
          <h2>General Information</h2>
          <GeneralInfoForm
            generalData={generalData}
            setGeneralData={setGeneralData}
          />
        </Form>
        <Form>
          <div className="heading">
            <h2>Education</h2>
            <span
              className="material-symbols-outlined"
              onClick={handleAddEducation}
            >
              add
            </span>
          </div>
          {educationData.map((data, index) => (
            <EducationForm
              key={index}
              index={index}
              educationData={data}
              allEducation={educationData}
              setEducationData={setEducationData}
            />
          ))}
        </Form>
        <Form>
          <div className="heading">
            <h2>Skills</h2>
            <span className="material-symbols-outlined">add</span>
          </div>
          <SkillsForm skillsData={skillsData} setSkillsData={setSkillsData} />
        </Form>
        <Form>
          <div className="heading">
            <h2>Experience</h2>
            <span className="material-symbols-outlined">add</span>
          </div>
          <ExperienceForm
            experienceData={experienceData}
            setExperienceData={setExperienceData}
          />
        </Form>
        <Form>
          <div className="heading">
            <h2>Projects</h2>
            <span className="material-symbols-outlined">add</span>
          </div>
          <ProjectsForm
            projectsData={projectsData}
            setProjectsData={setProjectsData}
          />
        </Form>
      </div>
      <div>
        <ResumePreview
          generalData={generalData}
          educationData={educationData}
          skillsData={skillsData}
          experienceData={experienceData}
          projectsData={projectsData}
        />
      </div>
    </div>
  );
}

export default App;
