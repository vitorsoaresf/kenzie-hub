import { Container } from "./styles";
import { FiUser, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../services/api";

function Home() {
  const formSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => console.log(response.data))
      .catch((err) => console.log("kkkk", err));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitFunction)}>
      <Input
        icon={FiUser}
        type="email"
        placeholder="Email"
        register={register}
        name="email"
        error={errors.email?.message}
      />
      <Input
        icon={FiLock}
        type="password"
        placeholder="Senha"
        register={register}
        name="password"
        error={errors.password?.message}
      />
      <Button type="submit">Login</Button>
    </Container>
  );
}

export default Home;
