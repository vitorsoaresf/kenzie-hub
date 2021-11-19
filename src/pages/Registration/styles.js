import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  width: 100vw;
  max-width: 310px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
      margin: 0px 5px;
      height: 30px;
      padding: 0px 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--purple);
      color: var(--white);
      border-radius: 5px;
    }
  }

  button {
    margin-right: 10px;
    border-radius: 100%;
    border: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: bold;
  }

  @media (min-width: 426px) {
    h1 {
    }
  }
  @media (min-width: 1024px) {
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  button {
    margin-top: 50px;
  }
`;

export const ContainerUl = styled.ul`
  background-color: violet;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
