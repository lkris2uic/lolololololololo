import React, { useState } from "react";
import "../components/styles/ProfilePage.css";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    preferences: "",
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProfile((prev) => ({ ...prev, image: file }));
  };

  const handleSave = () => {
    console.log("Saved Profile:", profile);
    alert("Profile saved successfully!");
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>

      {/* Profile Picture Upload */}
      <div className="profile-picture">
        <label htmlFor="image-upload" className="image-upload-label">
          {profile.image ? (
            <img
              src={URL.createObjectURL(profile.image)}
              alt="Profile"
              className="uploaded-image"
            />
          ) : (
            <div className="placeholder-image">Upload Photo</div>
          )}
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden-input"
          />
        </label>
      </div>

      {/* User Details */}
      <div className="profile-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>

        <label>
          Bio:
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Write a short bio about yourself"
          />
        </label>

        <label>
          Preferences:
          <input
            type="text"
            name="preferences"
            value={profile.preferences}
            onChange={handleChange}
            placeholder="E.g., Journaling themes, reminders"
          />
        </label>
      </div>

      {/* Save Button */}
      <div className="save-button-container">
        <button onClick={handleSave} className="save-button">
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
