/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { emotionLight, emotionDark } from "../theme/emotionTheme";

const Page = styled.div`
  min-height: 100vh;
  padding: 100px 20px;
  text-align: center;
`;

export default function EmotionPage() {
  const [dark, setDark] = useState(false);
  const t = dark ? emotionDark : emotionLight;
  const nav = useNavigate();

  const btn = css`
    padding: 12px 26px;
    display: block;
    margin: 12px auto;
    border-radius: 12px;
    border: 2px solid ${t.btnColor};
    background: transparent;
    color: ${t.btnColor};
    font-weight: 700;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
      background: ${t.btnColor};
      color: ${t.btnHoverText};
    }
  `;

  return (
    <Page style={{ background: t.bg, color: t.text }}>
      <h1 className="fadeSlideDown" style={{ color: t.title }}>
        Selamat Datang di Materi Jayjay!
      </h1>
      <button css={btn} onClick={() => setDark((p) => !p)}>
        Ganti Tema
      </button>
      <br />
      <br />
      <button css={btn} onClick={() => alert("Lanjut belajar")}>
        Ayo Belajar Animasi!
      </button>
    </Page>
  );
}
