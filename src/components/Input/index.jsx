import { Container, ContainerInput } from "./styles";

function Input({ icon: Icon, register, name, placeholder, error, ...rest }) {
  return (
    <Container>
      <ContainerInput>
        {/* {Icon && <Icon />} */}
        <input {...register(name)} {...rest} placeholder=" " />
        <label>{placeholder}</label>
      </ContainerInput>
      {error && <p>{error}</p>}
    </Container>
  );
}

export default Input;
