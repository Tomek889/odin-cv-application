import { useState } from "react";

export default function ExperienceForm({
  index,
  experienceData,
  setExperienceData,
  allExperience,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleChange(e) {
    const updated = [...allExperience];
    updated[index] = {
      ...updated[index],
      [e.target.name]: e.target.value,
    };
    setExperienceData(updated);
  }

  function handleEdit() {
    setIsEditing(!isEditing);
    setIsActive(!isActive);
  }

  function handleDelete() {
    const updated = allExperience.filter((_, i) => i !== index);
    setExperienceData(updated);
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
            value={experienceData.name}
            onChange={handleChange}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="name">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            value={experienceData.type}
            onChange={handleChange}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={experienceData.description}
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
          <button type="button" onClick={handleDelete} className="deleteButton">
            Delete
          </button>
        </div>
      </form>
    </>
  );
}
