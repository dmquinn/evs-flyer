import React from "react";

export const TextTools = ({ highlightWord }) => {
  return (
    <button onClick={highlightWord} style={{ marginTop: "150px" }}>
      Highlight
    </button>
  );
};
