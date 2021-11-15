import { Container } from "./styles";
import { FiUser, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../services/api";

function Home() {
  const history = useHistory();

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
      .then((response) => {
        console.log(response.data);
        history.push("/dashboard");
      })
      .catch((err) => console.log("kkkk", err));
  };

  return (
    <>
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
        <Button type="submit">LOGIN</Button>
      </Container>

      <p>Criar uma Página para mostar suas habilidades metas e progresso</p>
      <Button onClick={() => history.push("/registration")}>CADASTRAR</Button>
    </>
  );
}

export default Home;
