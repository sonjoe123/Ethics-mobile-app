import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const ethicalQuestions = [
  { id: 1, question: "Should AI replace human jobs?" },
  { id: 2, question: "Is it ethical to use surveillance technologies in public spaces?" },
  { id: 3, question: "Should genetic modification of humans be allowed?" },
  // Add more preset questions here
];

export const EthicalGen = () => {
  const [responses, setResponses] = useState({});
  const [customQuestion, setCustomQuestion] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleResponse = (id, response) => {
    setResponses((prev) => ({
      ...prev,
      [id]: response,
    }));
  };

  const handleCustomQuestionSubmit = (e) => {
    e.preventDefault();
    if (customQuestion.trim()) {
      const newQuestion = {
        id: ethicalQuestions.length + 1,
        question: customQuestion,
      };
      ethicalQuestions.push(newQuestion); // Add new question dynamically
      setCustomQuestion("");
    }
  };

  return (
    <div className="ethical-questions-container">
      {ethicalQuestions.map((entry) => (
        <div key={entry.id} className="question-wrapper">
          <h3 className="question-heading">{entry.question}</h3>
          <div className="response-buttons">
            <button
              onClick={() => handleResponse(entry.id, "For")}
              className={`response-button for ${responses[entry.id] === "For" ? "selected" : ""}`}
            >
              For
            </button>
            <button
              onClick={() => handleResponse(entry.id, "Against")}
              className={`response-button against ${responses[entry.id] === "Against" ? "selected" : ""}`}
            >
              Against
            </button>
            <button
              onClick={() => handleResponse(entry.id, "Neutral")}
              className={`response-button neutral ${responses[entry.id] === "Neutral" ? "selected" : ""}`}
            >
              Neutral
            </button>
          </div>
        </div>
      ))}

      {/* Input box for custom question */}
      <div className="custom-question-wrapper">
        <form onSubmit={handleCustomQuestionSubmit}>
          <label htmlFor="custom-question">Enter your own ethical question:</label>
          <input
            type="text"
            id="custom-question"
            value={customQuestion}
            onChange={(e) => setCustomQuestion(e.target.value)}
            placeholder="Type your question here..."
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Analyze result button */}
      <div className="analyze-result-button">
        <button onClick={() => navigate("/analysis")}>Analyze the result</button>
      </div>
    </div>
  );
};
