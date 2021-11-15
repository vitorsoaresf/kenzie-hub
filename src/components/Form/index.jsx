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

function Form() {
  return (
    <Container>
      <Input icon={FiUser} />
      <Input icon={FiLock} />
    </Container>
  );
}

export default Form;
