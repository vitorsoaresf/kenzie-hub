import { Container, ContainerInput } from "./styles";

function Input({ icon: Icon }) {
  return (
    <Container>
      <ContainerInput>
        {Icon && <Icon />}
        <input />
      </ContainerInput>
    </Container>
  );
}

export default Input;
