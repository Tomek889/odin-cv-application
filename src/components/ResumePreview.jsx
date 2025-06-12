export default function ResumePreview({
  generalData,
  educationData,
  skillsData,
  experienceData,
  projectsData,
}) {
  return (
    <div className="resume">
      <div className="general">
        <h1>{generalData.name}</h1>
        <p>
            <span>{generalData.email}</span>
            <span style={{ marginLeft: "20px"}}>{generalData.phone}</span>
        </p>
        <p>
            <span>{generalData.linkedin}</span>
            <span style={{ marginLeft: "20px"}}>{generalData.github}</span>
        </p>
      </div>
      <div className="education">
        <h2>Education</h2><hr />
        <h3>{educationData.school}  |  {educationData.startDate} - {educationData.endDate}</h3>
        <p>{educationData.degree}</p>
        <p>{educationData.location}</p>
      </div>
      <div className="skills">
        <h2>Skills</h2><hr />
        {skillsData.skills}
      </div>
      <div className="experience">
        <h2>Experience</h2><hr />
        <h3>{experienceData.name}  |  {experienceData.type}</h3>
        <p>{experienceData.description}</p>
      </div>
      <div className="projects">
        <h2>Projects</h2><hr />
        <h3>{projectsData.name}</h3>
        <p>{projectsData.description}</p>
      </div>
    </div>
  );
}
