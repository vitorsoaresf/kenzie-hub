import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.6rem;
    position: absolute;
    left: 56%;
    /* top: 50%; */
    /* margin-bottom: 50px; */
    transform: translateX(-50%);
    /* transform: translateY(100%); */
    color: red;
    /* left: 0; */
    text-align: start;
    background-color: var(--white);
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 13px;
  color: var(--grey-50);

  input {
    background-color: var(--grey-0);
    width: 290px;
    height: 50px;
    border: 0;
    outline: none;
    min-width: 180px;
    font-size: 16px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    border-radius: 10px;
    /* margin: 10px 0; */
  }

  input:focus {
    border: 1px solid black;
  }

  input::placeholder {
    color: transparent;
  }

  label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 30px;
    margin-left: 30px;
    font-size: 0.9rem;
    color: var(--grey-50);
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
  }

  input:required:invalid + label {
    color: red;
  }

  input:focus:required:invalid {
    border-bottom: 2px solid red;
  }

  input:required:invalid + label:before {
    content: "*";
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    background-color: var(--white);
    font-size: 13px;
    margin-top: 5px;
    color: black;
  }
`;
