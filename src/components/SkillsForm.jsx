import { useState } from "react";

export default function SkillsForm({
  index,
  skillsData,
  setSkillsData,
  allSkills,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleChange(e) {
    const updated = [...allSkills];
    updated[index] = {
      ...updated[index],
      [e.target.name]: e.target.value,
    };
    setSkillsData(updated);
  }

  function handleEdit() {
    setIsEditing(!isEditing);
    setIsActive(!isActive);
  }

  return (
    <>
      <form action="" className={!isActive ? "disabled" : ""}>
        <div>
          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            value={skillsData.type}
            onChange={handleChange}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="skills">Skills</label>
          <textarea
            name="skills"
            id="skills"
            value={skillsData.skills}
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
