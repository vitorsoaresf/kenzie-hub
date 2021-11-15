import { Container, ContainerInput } from "./styles";

function Input({ icon: Icon, register, name, ...rest }) {
  return (
    <Container>
      <ContainerInput>
        {Icon && <Icon />}
        <input {...register(name)} {...rest} />
      </ContainerInput>
    </Container>
  );
}

export default Input;
