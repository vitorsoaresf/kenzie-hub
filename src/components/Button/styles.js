import { purple } from "@mui/material/colors";
import styled from "styled-components";

export const Container = styled.button`
  border: none;
  height: 30px;

  background-color: ${(props) =>
    props.color === "purple"
      ? "var(--purple)"
      : props.color === "green"
      ? "var(--green)"
      : "var(--grey-0)"};
  color: ${(props) =>
    props.color === "purple" ? "var(--white)" : "var(--grey-50)"};
  font-weight: bold;
  width: 295px;
  height: 50px;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;

  :hover {
  }
`;
