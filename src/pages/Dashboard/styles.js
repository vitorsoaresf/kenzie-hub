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
      margin: 20px 10px;
      font-size: 1.5rem;
    }
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

  @media (min-width: 426px) {
    section {
      p {
        margin-left: 20px;
        font-size: 1.3rem;
      }

      button {
        padding: 10px 15px;
      }
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

  @media (min-width: 426px) {
    section {
      p {
        margin-left: 20px;
        font-size: 1.3rem;
      }

      button {
        padding: 10px 15px;
      }
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

    :hover {
      border-color: var(--green);

      h1 {
        background-color: var(--green);
        color: var(--white);
      }
    }

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

    :hover {
      border-color: var(--purple);

      h1 {
        background-color: var(--purple);
        color: var(--white);
      }
    }

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

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: var(--purple);
    color: var(--white);
    border-radius: 10px;

    svg {
      margin: 10px 10px;
      font-size: 3rem;
      color: var(--white);
      border-radius: 100%;
      background-color: var(--purple);
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;

      h3,
      p,
      span {
        margin: 0;
      }

      p {
        color: var(--grey-0);
        font-size: 0.7rem;
      }

      span {
        color: var(--grey-50);
        font-size: 0.7rem;
        font-style: italic;
      }
    }
  }

  main {
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    section,
    article {
      background-color: var(--grey-0);
      display: flex;
      align-items: center;
      width: 80%;
      margin: 10px 0;
      border-radius: 5px;

      svg {
        color: var(--white);
        background-color: var(--purple);
        font-size: 2rem;
        padding: 10px 10px;
        margin: 10px 5px;
      }

      div {
        p,
        span {
          margin: 0;
        }

        p {
          font-weight: 600;
          color: var(--grey-100);
        }

        span {
          font-weight: 600;
          color: var(--grey-50);
          font-size: 0.7rem;
        }
      }
    }

    article {
      background-color: #e7f5ef;
      color: var(--white);

      svg {
        color: var(--);
        background-color: var(--green);
      }
    }

    button {
      width: 80%;
      border: none;
      border-radius: 10px;
      padding: 20px 15px;
      color: var(--grey-50);
      font-weight: 600;
      margin: 10px 0;
      cursor: pointer;
      transition: background-color 1s;

      :hover {
        background-color: var(--grey-50);
        color: var(--white);
      }
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
