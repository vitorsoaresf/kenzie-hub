import { Container } from "./styles";

function Button({ children, onClick, color }) {
  return (
    <Container color={color} onClick={onClick}>
      {children}
    </Container>
  );
}

export default Button;
