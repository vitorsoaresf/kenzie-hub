import { Container } from "./styles";

function Button({ children, onClick }) {
  return <Container onClick={onClick}>{children}</Container>;
}

export default Button;
