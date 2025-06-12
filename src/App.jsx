import "./App.css";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationForm from "./components/EducationForm";
import SkillsForm from "./components/SkillsForm";
import ExperienceForm from "./components/ExperienceForm";
import ProjectsForm from "./components/Projects";

function App() {
  return (
    <>
      <GeneralInfoForm />
      <EducationForm />
      <SkillsForm />
      <ExperienceForm />
      <ProjectsForm />
    </>
  );
}

export default App;
