import { useState } from "react";

export default function SkillsForm() {
  const [formData, setFormData] = useState({
    skills: "Skill 1, Skill 2, Skill 3, Skill 4, Skill 5",
  });
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <>
      <form action="">
        <div>
          <textarea
            name="skills"
            id="skills"
            value={formData.skills}
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
