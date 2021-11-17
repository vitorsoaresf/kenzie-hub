import {
  Container,
  ContainerForm,
  ContainerInfo,
  ContainerTitle,
} from "./styles";
import { FiUser, FiLock } from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../services/api";

function Home({ authenticated, setAuthenticated }) {
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
        const { token, user } = response.data;
        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@Kenziehub:user", JSON.stringify(user));
        setAuthenticated(true);
        history.push(`/dashboard`);
      })
      .catch((err) => console.log("Usuário não registrado!", err));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <ContainerTitle>
        <h1>Kenzie</h1>
        <h2>Hub</h2>
      </ContainerTitle>
      <Container>
        <ContainerForm onSubmit={handleSubmit(onSubmitFunction)}>
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
          <Button color="purple" type="submit">
            Logar
          </Button>
        </ContainerForm>
        <ContainerInfo>
          <span>Criar uma Página para mostar suas</span>
          <p> habilidades metas e progresso</p>
        </ContainerInfo>
        <Button color="grey" onClick={() => history.push("/registration")}>
          Cadastrar
        </Button>
      </Container>
    </>
  );
}

export default Home;
