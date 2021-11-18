import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--grey-50);
`;

export const ContainerUl = styled.ul`
  background-color: violet;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: flex-s; */
  font-size: 0.7rem;
  list-style: none;
`;

export const ContainerModal = styled.div`
  display: flex;
  height: 100vh;

  div {
  }
`;

export const ContainerRadio = styled.div`
  display: flex;
  width: 290px;
  margin: 10px 0;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;

  input {
    background-color: violet;
    padding: 0;
    width: 0px;
    height: 0px;
  }

  input:focus + label {
    background-color: blue;
    background-color: var(--purple);
    color: var(--white);
  }

  div {
    label {
      background-color: var(--grey-0);
      font-size: 0.7rem;
      color: var(--purple);
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
    }
  }
`;
