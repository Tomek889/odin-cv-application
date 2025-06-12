import { useState } from "react";

export default function GeneralInfoForm({ generalData, setGeneralData }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleChange(e) {
    setGeneralData({
      ...generalData,
      [e.target.name]: e.target.value,
    });
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
            value={generalData.name}
            onChange={handleChange}
            maxLength={50}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={generalData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={generalData.phone}
            onChange={handleChange}
            maxLength={30}
          />
        </div>
        <div>
          <label htmlFor="linkedin">LinkedIn</label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            value={generalData.linkedin}
            onChange={handleChange}
            placeholder="https://www.linkedin.com/in/yourusername/"
            maxLength={180}
          />
        </div>
        <div>
          <label htmlFor="github">GitHub</label>
          <input
            type="url"
            name="github"
            id="github"
            value={generalData.github}
            onChange={handleChange}
            placeholder="https://github.com/yourusername"
            maxLength={180}
          />
        </div>
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
