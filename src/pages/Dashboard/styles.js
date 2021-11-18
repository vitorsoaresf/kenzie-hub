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
  /* margin-bottom: 10px;
  box-shadow: 0 0 1em rgba(0, 0, 0, 1); */
  /* box-shadow: inset 0px -5px 10px 0px rgba(0, 0, 0, 0.1); */

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
  section {
    box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
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
  section {
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

export const ContainerUlTechs = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  padding: 0;
  margin: 0;

  li {
    width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 10px 0;
    border-right: 4px solid var(--grey-0);

    div {
      display: flex;
      flex-direction: column;
      height: 50px;
      background: unset;
      align-items: flex-start;
      justify-content: center;

      h3 {
        margin: 0 10px;
      }

      p {
        margin: 5px 10px;
        background-color: #e7f5ef;
        color: var(--green);
        font-weight: 500;
        padding: 10px 15px;
        border-radius: 10px;
      }
    }

    h1 {
      background-color: #e7f5ef;
      color: var(--green);
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
      border-radius: 10px;
    }
  }
`;

export const ContainerUlWorks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  padding: 0;
  margin: 0;

  li {
    width: 90%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 10px 0;
    border-right: 4px solid var(--grey-0);

    div {
      display: flex;
      flex-direction: column;
      height: 50px;
      background: unset;
      align-items: flex-start;
      justify-content: center;

      h3 {
        margin: 0 10px;
      }

      p {
        font-size: 0.7rem;
        margin: 0px 10px;
        text-overflow: ellipsis;
        color: var(--grey-50);
        font-weight: 500;
        border-radius: 10px;
      }

      a {
        font-size: 0.7rem;
        margin: 0px 10px;
        text-overflow: ellipsis;
        color: var(--purple);
        font-weight: 500;
        border-radius: 10px;
      }
    }

    h1 {
      background-color: #ececf7;
      color: var(--purple);
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
      border-radius: 10px;
    }
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
