import React from "react";
import "../components/styles/InsightsPage.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const moodData = [
  { day: "Mon", mood: 3 },
  { day: "Tue", mood: 4 },
  { day: "Wed", mood: 2 },
  { day: "Thu", mood: 5 },
  { day: "Fri", mood: 4 },
  { day: "Sat", mood: 3 },
  { day: "Sun", mood: 5 },
];

const recurringTopics = ["Gratitude", "Work Stress", "Family", "Health", "Productivity"];

const InsightsPage = () => {
  return (
    <div className="insights-container">
      {/* Header */}
      <header className="insights-header">
        <h1>Insights</h1>
        <p>Discover trends, emotions, and recurring themes from your journal entries.</p>
      </header>

      {/* Mood Trends */}
      <section className="insights-section">
        <h2>Mood Trends</h2>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={moodData}>
              <XAxis dataKey="day" stroke="#555" />
              <YAxis domain={[0, 5]} />
              <CartesianGrid stroke="#e5e7eb" />
              <Tooltip />
              <Line type="monotone" dataKey="mood" stroke="#3182ce" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Recurring Topics */}
      <section className="insights-section">
        <h2>Recurring Topics</h2>
        <div className="topics-container">
          {recurringTopics.map((topic, index) => (
            <div key={index} className="topic-card">
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </section>

      {/* AI Summary */}
      <section className="insights-section">
        <h2>AI Summary</h2>
        <div className="ai-summary">
          <p>
            "This week, your dominant mood was positive, with gratitude and productivity being
            recurring themes. Work stress was noted on Wednesday, but overall, the emotional balance
            was healthy."
          </p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="stats-section">
        <div className="stats-card">
          <h3>Total Entries</h3>
          <p>24</p>
        </div>
        <div className="stats-card">
          <h3>Dominant Mood</h3>
          <p>😊 Happy</p>
        </div>
        <div className="stats-card">
          <h3>Longest Positive Streak</h3>
          <p>5 Days</p>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;
