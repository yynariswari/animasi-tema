import React from "react";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

export default function Animasi() {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h2>Halaman Animasi</h2>

      <Link to="/">
        <Button>Kembali</Button>
      </Link>
    </div>
  );
}
