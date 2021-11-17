import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--grey-50);
  background-color: var(--white);
  text-align: center;
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
