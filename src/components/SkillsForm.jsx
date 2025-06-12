import { useState } from "react";

export default function SkillsForm({skillsData, setSkillsData}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleChange(e) {
    setSkillsData({ ...skillsData, [e.target.name]: e.target.value });
  }

  function handleEdit() {
    setIsEditing(!isEditing);
    setIsActive(!isActive);
  }

  return (
    <>
      <form action="" className={!isActive ? "disabled" : ''}>
        <div>
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
