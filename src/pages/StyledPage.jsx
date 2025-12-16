import React, { useState } from "react";
import styled from "styled-components";
import { styledLight, styledDark } from "../theme/styledTheme";
import { useNavigate } from "react-router-dom";

const Page = styled.div`
  min-height: 100vh;
  padding: 100px 20px;
  text-align: center;
  transition: 0.3s;
  background: ${(p) => p.bg};
  color: ${(p) => p.text};
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 8px;
  color: ${(p) => p.title};
`;

const Sub = styled.h3`
  color: ${(p) => p.sub};
  margin-bottom: 28px;
`;

const Btn = styled.button`
  padding: 12px 26px;
  margin: 0 10px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  border: 2px solid ${(p) => p.col};
  background: transparent;
  color: ${(p) => p.col};
  transition: 0.25s;
  &:hover {
    background: ${(p) => p.col};
    color: ${(p) => p.hover};
  }
`;

const ButtonGroup = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export default function StyledPage() {
  const [dark, setDark] = useState(false);
  const t = dark ? styledDark : styledLight;
  const nav = useNavigate();

  return (
    <Page bg={t.bg} text={t.text}>
      <Title title={t.title}>Selamat Datang di Materi Jayjay!</Title>
      <ButtonGroup>
        <Btn col={t.btn} hover={t.btnHover} onClick={() => setDark((p) => !p)}>
          Ganti Tema
        </Btn>
        <br />
        <br />
        <Btn
          col={t.btn}
          hover={t.btnHover}
          onClick={() => alert("Lanjut belajar")}
        >
          Lanjut Belajar
        </Btn>
      </ButtonGroup>
    </Page>
  );
}
