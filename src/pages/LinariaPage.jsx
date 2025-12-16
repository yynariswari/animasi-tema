import React, { useState } from "react";
import { linariaLight, linariaDark } from "../theme/linariaTheme";
import { useNavigate } from "react-router-dom";

export default function LinariaPage() {
  const [dark, setDark] = useState(false);
  const t = dark ? linariaDark : linariaLight;
  const nav = useNavigate();

  const cssVars = {
    "--bg": t.bg,
    "--text": t.text,
    "--title": t.title,
    "--sub": t.sub,
    "--btn": t.btnColor,
    "--hover": t.btnHoverText,
  };

  const btn = {
    padding: "12px 26px",
    borderRadius: "12px",
    fontWeight: "700",
    cursor: "pointer",
    border: "2px solid var(--btn)",
    background: "transparent",
    color: "var(--btn)",
    transition: "0.25s",
  };

  const btnGroup = {
    marginTop: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
  };

  return (
    <div
      style={{
        ...cssVars,
        minHeight: "100vh",
        padding: "100px 20px",
        textAlign: "center",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <h1 className="fadeSlideDown" style={{ color: "var(--title)" }}>
        Selamat Datang di Materi Jayjay!
      </h1>
      <div style={btnGroup}>
        <button
          style={btn}
          onMouseEnter={(e) => (e.target.style.background = "var(--btn)")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
          onClick={() => setDark((p) => !p)}
        >
          Ganti Tema
        </button>
        <br />
        <br />
        <button
          style={btn}
          onMouseEnter={(e) => (e.target.style.background = "var(--btn)")}
          onMouseLeave={(e) => (e.target.style.background = "transparent")}
          onClick={() => alert("Lanjut belajar")}
        >
          Lanjut Belajar
        </button>
      </div>
    </div>
  );
}
