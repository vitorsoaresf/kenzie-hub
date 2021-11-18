import {
  Container,
  ContainerWorks,
  ContainerModal,
  ContainerUl,
  ContainerTitle,
  ContainerTechs,
} from "./styles";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiArrowRight, FiUser, FiCodesandbox } from "react-icons/fi";
import Button from "../../components/Button";
import api from "../../services/api";

function Dashboard({ authenticated, setAuthenticated }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || ""
  );

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const [registerTech, setRegisterTech] = useState(false);
  const [registerWork, setRegisterWork] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmitTech = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("OK");
      })
      .catch((err) => console.log("Usuário não registrado!", err));
    setRegisterTech(false);
  };

  const onSubmitWork = (data) => {
    api
      .post("/users/works", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("OK");
      })
      .catch((err) => console.log("Usuário não registrado!", err));
    setRegisterWork(false);
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <ContainerTitle>
        <div>
          <h1>Kenzie</h1>
          <h2>Hub</h2>
        </div>

        <button
          onClick={() => {
            setAuthenticated(false);
            localStorage.clear();
          }}
        >
          <FiUser />
        </button>
      </ContainerTitle>

      {/* MINHAS TECNOLOGIAS */}
      <ContainerTechs>
        <section>
          <p>Minhas Tecnologias</p>
          <button onClick={() => setRegisterTech(true)}>+</button>
        </section>
        <ContainerUl>
          {user.techs.map((tech, index) => (
            <li key={index}>
              <h1>{<FiCodesandbox />}</h1>
              <div>
                <h3>{tech.title}</h3>
                <p>{tech.status}</p>
              </div>
            </li>
          ))}
        </ContainerUl>
        {registerTech && (
          <ContainerModal>
            <form onSubmit={handleSubmit(onSubmitTech)}>
              <p>Casdastrar Tecnologia</p>
              <input {...register("title")} />
              <input {...register("status")} />
              <Button type="submit">Cadastrar</Button>
            </form>
          </ContainerModal>
        )}
      </ContainerTechs>

      {/* MEUS TRABALHOS */}
      <ContainerWorks>
        <div>
          <p>Meus Trabalhos</p>
          <button onClick={() => setRegisterWork(true)}>+</button>
        </div>
        <ContainerUl>
          {user.works.map((work, index) => (
            <li key={index}>
              <a href={work.deploy_url}>
                <h1>{<FiArrowRight />}</h1>
                <div>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ContainerUl>
        {registerWork && (
          <ContainerModal>
            <form onSubmit={handleSubmit(onSubmitWork)}>
              <p>Casdastrar Trabalho</p>
              <input {...register("title")} />
              <input {...register("description")} />
              <input {...register("deploy_url")} />
              <Button type="submit">Cadastrar</Button>
            </form>
          </ContainerModal>
        )}
      </ContainerWorks>
    </Container>
  );
}

export default Dashboard;
