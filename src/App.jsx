import "./styles/reset.css";
import "./styles/share.css";
import "./styles/formStyles.css";
import "./styles/resume.css";

import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";
import ExperienceForm from "./components/ExperienceForm";
import ProjectsForm from "./components/ProjectsForm";
import Form from "./components/Form";
import ResumePreview from "./components/ResumePreview";

function App() {
  return (
    <>
      <div>
        <Form>
          <h2>General Information</h2>
          <GeneralInfoForm />
        </Form>
        <Form>
          <h2>Education</h2>
          <EducationForm />
        </Form>
        <Form>
          <h2>Skills</h2>
          <SkillsForm />
        </Form>
        <Form>
          <h2>Experience</h2>
          <ExperienceForm />
        </Form>
        <Form>
          <h2>Projects</h2>
          <ProjectsForm />
        </Form>
      </div>
      <div></div>
    </>
  );
}

export default App;
