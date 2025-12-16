import React from "react";
import { useNavigate } from "react-router-dom";

export default function SelectLibrary() {
  const nav = useNavigate();
  const btnStyle = {
    display: "block",
    width: 260,
    margin: "14px auto",
    padding: "12px 18px",
    borderRadius: 10,
    border: "2px solid #333",
    background: "#fff",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 16,
  };

  return (
    <div style={{ textAlign: "center", padding: "120px 20px" }}>
      <h1 style={{ marginBottom: 8 }}>Pilih Library CSS-in-JS</h1>
      <p style={{ marginTop: 0, color: "#666" }}>
        Klik salah satu untuk masuk ke materi
      </p>

      <button style={btnStyle} onClick={() => nav("/styled")}>
        Styled Components
      </button>
      <button style={btnStyle} onClick={() => nav("/emotion")}>
        Emotion
      </button>
      <button style={btnStyle} onClick={() => nav("/linaria")}>
        Linaria
      </button>

      <div style={{ marginTop: 28 }}>
        <small style={{ color: "#888" }}>
          Routing: HashRouter (URL akan menjadi #/styled dll.)
        </small>
      </div>
    </div>
  );
}
