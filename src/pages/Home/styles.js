import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--grey-0);
  background-color: var(--white);
  text-align: center;
  border-radius: 5px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    margin: 0px 10px;
    background-color: var(--purple);
    color: var(--white);
    padding: 3px;
    border-radius: 5px;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
`;

export const ContainerInfo = styled.div`
  font-size: 0.8rem;
  margin: 10px 0;

  span {
    color: var(--grey-50);
  }

  p {
    margin: 0;
  }
`;
