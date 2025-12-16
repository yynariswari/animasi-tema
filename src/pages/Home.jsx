import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1 style={{ color: "red" }}>Selamat datang di pelajaran CSS-in-JS</h1>
      <h3 style={{ color: "#555", marginBottom: "30px" }}>JayJay</h3>

      <button
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          border: "2px solid blue",
          background: "white",
          color: "blue",
          cursor: "pointer",
          marginRight: "15px",
        }}
        onClick={() => navigate("/choose")}
      >
        Lanjut Belajar!
      </button>

      <button
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          border: "2px solid red",
          background: "white",
          color: "red",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Kembali
      </button>
    </div>
  );
}
