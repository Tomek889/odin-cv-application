import { useState } from "react";

export default function ProjectsForm() {
  const [formData, setFormData] = useState({
    name: "Project Name",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione in reprehenderit quos dolores blanditiis dolor esse! Commodi omnis quibusdam eaque delectus doloribus! Rem quam odit facere saepe reiciendis dolorum.",
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          maxLength={100}
        />
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          maxLength={400}
        ></textarea>
        {isEditing ? (
          <button type="button" onClick={handleEdit}>
            Submit
          </button>
        ) : (
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        )}
      </form>
    </>
  );
}
