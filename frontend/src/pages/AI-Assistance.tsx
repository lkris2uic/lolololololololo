import React, { useState } from "react";
import "../components/styles/AIAssistance.css";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const predefinedPrompts = [
  "Summarize my last journal entry.",
  "What recurring themes do you notice?",
  "Give me a journaling prompt for today.",
  "How was my mood over the last week?",
];

const AIAssistancePage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulate AI Response (Replace with API Integration)
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    }, 1000);
  };

  const generateAIResponse = (userInput: string): string => {
    // Dummy AI logic for demonstration purposes
    if (userInput.toLowerCase().includes("summarize")) {
      return "Here's a summary: You seem to be reflecting on gratitude and productivity recently.";
    } else if (userInput.toLowerCase().includes("themes")) {
      return "The recurring themes are gratitude, stress management, and personal growth.";
    } else {
      return "Thank you for sharing! What else would you like me to help with?";
    }
  };

  return (
    <div className="ai-assistance-container">
      {/* Header */}
      <header className="ai-header">
        <h1>AI Assistance</h1>
        <p>Your personal journaling assistant.</p>
      </header>

      {/* Chat Window */}
      <div className="chat-window">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.sender === "user" ? "user" : "ai"}`}
          >
            <p>{message.text}</p>
          </div>
        ))}
      </div>

      {/* Predefined Prompts */}
      <div className="prompt-buttons">
        {predefinedPrompts.map((prompt, index) => (
          <button
            key={index}
            className="prompt-button"
            onClick={() => {
              setInput(prompt);
              handleSend();
            }}
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask the AI anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default AIAssistancePage;
