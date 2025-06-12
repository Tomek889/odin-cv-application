import "./styles/reset.css"
import "./styles/formStyles.css";
import "./styles/resume.css"

import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";
import ExperienceForm from "./components/ExperienceForm";
import ProjectsForm from "./components/Projects";
import Form from "./components/Form";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
