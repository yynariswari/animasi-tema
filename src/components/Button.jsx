import styled from "styled-components";

export const btn = css`
  display: block;
  width: 260px;
  padding: 12px 26px;
  margin: 14px auto; /* auto biar ke tengah */
  border-radius: 12px;
  border: 2px solid ${t.btnColor};
  background: transparent;
  color: ${t.btnColor};
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s;

  /* Glow & scale */
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px ${({ theme }) => theme.primary};
  }

  /* Border expand animation */
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 0;
    height: 0;
    border: 2px solid ${({ theme }) => theme.primary};
    transform: translate(-50%, -50%);
    transition: all 0.35s ease;
    border-radius: 8px;
  }
`;
