import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export const AnalysisPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="analysis-page-container">
      <h2>This is an analysis of the choices you made</h2>
      <div className="analysis-box"></div> {/* Blank white box for analysis */}
      <button onClick={() => navigate("/EthicalGen")}>Back to the Ethical Questions</button>
    </div>
  );
};
