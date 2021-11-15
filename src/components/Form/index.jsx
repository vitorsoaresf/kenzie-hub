import { Container } from "./styles";
import {
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiBook,
  FiArrowRight,
} from "react-icons/fi";

import Input from "../Input";
import Button from "../Button";

function Form() {
  return (
    <Container>
      <Input icon={FiUser} />
      <Input icon={FiLock} />
      <Button>Login</Button>
    </Container>
  );
}

export default Form;
