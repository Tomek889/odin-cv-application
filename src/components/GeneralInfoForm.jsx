import { useState } from "react";

export default function GeneralInfoForm() {
  const [formData, setFormData] = useState({
    name: "Your Name",
    email: "your@email.com",
    phone: "+0123456789",
    linkedin: "https://www.linkedin.com/in/yourusername/",
    github: "https://github.com/yourusername",
  });
  const [isEditing, setIsEditing] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
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
          value={formData.email}
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
          value={formData.phone}
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
          value={formData.linkedin}
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
          value={formData.github}
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
