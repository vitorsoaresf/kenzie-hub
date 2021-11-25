import { Container } from "./styles";

function Button({ children, onClick, color, type }) {
  return (
    <Container type={type} color={color} onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;
