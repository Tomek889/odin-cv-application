import { useState } from "react";

export default function ExperienceForm() {
  const [formData, setFormData] = useState({
    name: "Company Name",
    type: "Type of the Job",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ratione in reprehenderit quos dolores blanditiis dolor esse! Commodi omnis quibusdam eaque delectus doloribus! Rem quam odit facere saepe reiciendis dolorum.",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleEdit() {
    setIsEditing(!isEditing);
    setIsActive(!isActive);
  }

  return (
    <>
      <form action="" className={!isActive && "disabled"}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
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
            value={formData.type}
            onChange={handleChange}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
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
