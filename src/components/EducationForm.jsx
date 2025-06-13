import { useState } from "react";

export default function EducationForm({
  index,
  educationData,
  setEducationData,
  allEducation,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  function handleChange(e) {
    const updated = [...allEducation];
    updated[index] = {
      ...updated[index],
      [e.target.name]: e.target.value,
    };
    setEducationData(updated);
  }

  function handleEdit() {
    setIsEditing(!isEditing);
    setIsActive(!isActive);
  }

  return (
    <>
      <form action="" className={!isActive ? "disabled" : ""}>
        <div>
          <label htmlFor="school">School/College</label>
          <input
            type="text"
            name="school"
            id="school"
            value={educationData.school}
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
            value={educationData.degree}
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
            value={educationData.location}
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
            value={educationData.startDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="month"
            name="endDate"
            id="endDate"
            value={educationData.endDate}
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
