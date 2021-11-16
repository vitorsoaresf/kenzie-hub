import { Container, ContainerInput } from "./styles";

function Input({ icon: Icon, register, name, placeholder, ...rest }) {
  return (
    <Container>
      <ContainerInput>
        {/* {Icon && <Icon />} */}
        <input {...register(name)} {...rest} placeholder=" " />
        <label>{placeholder}</label>
      </ContainerInput>
    </Container>
  );
}

export default Input;
