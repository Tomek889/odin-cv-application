import { useState } from "react";

export default function ProjectsForm({
  index,
  projectsData,
  setProjectsData,
  allProjects,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleChange(e) {
    const updated = [...allProjects];
    updated[index] = {
      ...updated[index],
      [e.target.name]: e.target.value,
    };
    setProjectsData(updated);
  }

  function handleEdit() {
    setIsEditing(!isEditing);
    setIsActive(!isActive);
  }

  return (
    <>
      <form action="" className={!isActive ? "disabled" : ""}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={projectsData.name}
            onChange={handleChange}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={projectsData.description}
            onChange={handleChange}
            maxLength={400}
          ></textarea>
        </div>
        <div>
          {isEditing ? (
            <button type="button" onClick={handleEdit}>
              Submit
            </button>
          ) : (
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </form>
    </>
  );
}
