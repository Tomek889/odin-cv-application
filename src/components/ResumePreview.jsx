export default function ResumePreview({
  generalData,
  educationData,
  skillsData,
  experienceData,
  projectsData,
}) {
  return (
    <div className="resume">
      {generalData.name}
      {educationData.name}
      {skillsData.skills}
      {experienceData.name}
      {projectsData.name}
    </div>
  );
}
