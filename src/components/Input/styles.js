import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  input {
    border: none;
    height: 30px;
    margin: 20px 0px 20px 5px;

    :focus {
      background-color: violet;

      ::placeholder {
        color: black;
      }
    }
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
