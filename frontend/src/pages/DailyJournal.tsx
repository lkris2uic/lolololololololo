import React, { useState } from "react";
import "../../src/components/styles/DailyJournal.css";

const moods = ["😀", "😊", "😐", "😔", "😢"]; // Mood options (Emoji-based)

const DailyJournal = () => {
  const [entry, setEntry] = useState("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const handleSave = () => {
    // Here, you can implement save logic (e.g., API call, local storage)
    alert("Journal entry saved successfully!");
  };

  return (
    <div className="daily-journal-container">
      {/* Header */}
      <header className="journal-header">
        <h1>Daily Journal Page</h1>
        <p>{new Date().toDateString()}</p>
      </header>

      {/* Journal Entry Section */}
      <section className="journal-entry">
        <h2>What's on your mind today?</h2>
        <textarea
          placeholder="Write your thoughts here..."
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="journal-textarea"
        />
      </section>

      {/* Mood Tracker Section */}
      <section className="mood-tracker">
        <h2>How are you feeling today?</h2>
        <div className="mood-options">
          {moods.map((mood, index) => (
            <button
              key={index}
              className={`mood-button ${
                selectedMood === mood ? "selected" : ""
              }`}
              onClick={() => setSelectedMood(mood)}
            >
              {mood}
            </button>
          ))}
        </div>
      </section>

      {/* Prompts Section */}
      <section className="prompts">
        <h2>Today's Prompt</h2>
        <p>"What is one thing you're grateful for today?"</p>
      </section>

      {/* AI Summary Option */}
      <section className="ai-summary">
        <button className="ai-button" onClick={() => alert("AI Summary generated!")}>
          Generate AI Summary
        </button>
      </section>

      {/* Save Button */}
      <footer className="journal-footer">
        <button className="save-button" onClick={handleSave}>
          Save Entry
        </button>
      </footer>
    </div>
  );
};

export default DailyJournal;
