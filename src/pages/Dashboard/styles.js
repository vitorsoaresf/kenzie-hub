import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerData = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  div {
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
