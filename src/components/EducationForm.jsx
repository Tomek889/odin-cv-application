import { useState } from "react";

export default function EducationForm() {
  const [formData, setFormData] = useState({
    school: "Your School/College",
    degree: "Your Degree",
    location: "Location",
    startDate: "2022-08",
    endDate: "2025-05",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleEdit() {
    setIsEditing(!isEditing);
    setIsActive(!isActive);
  }

  return (
    <>
      <form action="" className={!isActive && "disabled"}>
        <div>
          <label htmlFor="school">School/College</label>
          <input
            type="text"
            name="school"
            id="school"
            value={formData.school}
            onChange={handleChange}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            value={formData.degree}
            onChange={handleChange}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="month"
            name="startDate"
            id="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="month"
            name="endDate"
            id="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
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
