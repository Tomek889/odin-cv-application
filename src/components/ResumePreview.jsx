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
          <span style={{ marginLeft: "20px" }}>{generalData.phone}</span>
        </p>
        <p>
          <span>{generalData.linkedin}</span>
          <span style={{ marginLeft: "20px" }}>{generalData.github}</span>
        </p>
      </div>
      <div className="education">
        {educationData.length > 0 && (
          <>
            <h2>Education</h2>
            <hr />
            {educationData.map((data, index) => (
              <div key={index}>
                <h3>
                  {data.school} | {data.startDate} - {data.endDate}
                </h3>
                <p>{data.degree}</p>
                <p>{data.location}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="skills">
        {skillsData.length > 0 && (
          <>
            <h2>Skills</h2>
            <hr />
            {skillsData.map((data, index) => (
              <div key={index}>
                <h3>{data.type}</h3>
                <p>{data.skills}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="experience">
        {experienceData.length > 0 && (
          <>
            <h2>Experience</h2>
            <hr />
            {experienceData.map((data, index) => (
              <div key={index}>
                <h3>
                  {data.name} | {data.type}
                </h3>
                <p>{data.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="projects">
        <h2>Projects</h2>
        <hr />
        <h3>{projectsData.name}</h3>
        <p>{projectsData.description}</p>
      </div>
    </div>
  );
}
