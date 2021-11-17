import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--grey-0);
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  margin-bottom: 10px;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);

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
`;

export const ContainerTechs = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    font-weight: bold;

    p {
      margin-left: 10px;
    }

    button {
      padding: 5px 10px;
      color: var(--white);
      border: none;
      border-radius: 5px;
      background-color: var(--green);
      font-weight: bold;
      cursor: pointer;
      margin-right: 10px;
    }
  }
`;

export const ContainerWorks = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    font-weight: bold;

    p {
      margin-left: 10px;
    }

    button {
      padding: 5px 10px;
      color: var(--white);
      border: none;
      border-radius: 5px;
      background-color: var(--purple);
      font-weight: bold;
      cursor: pointer;
      margin-right: 10px;
    }
  }
`;

export const ContainerUl = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    display: flex;
    margin: 10px 0;
    background-color: aliceblue;
  }

  img {
    width: 50px;
    height: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1 {
    background-color: violet;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export const ContainerModal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: bisque;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;

  form {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    width: 250px;
    height: 30vh;
  }
`;
