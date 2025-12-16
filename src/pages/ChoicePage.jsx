import React from "react";
import { useNavigate } from "react-router-dom";

export default function ChoicePage() {
  const nav = useNavigate();

  const btnStyle = {
    display: "block",
    padding: "15px 20px",
    margin: "12px auto",
    width: "260px",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "600",
    background: "#111827",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div style={{ textAlign: "center", paddingTop: 120 }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>Pilih CSS-in-JS</h1>

      <button style={btnStyle} onClick={() => nav("/styled")}>
        Styled Components
      </button>

      <button style={btnStyle} onClick={() => nav("/emotion")}>
        Emotion
      </button>

      <button style={btnStyle} onClick={() => nav("/linaria")}>
        Linaria
      </button>
    </div>
  );
}
