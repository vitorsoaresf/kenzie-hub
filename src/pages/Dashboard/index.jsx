import {
  Container,
  ContainerWorks,
  ContainerModal,
  ContainerUlTechs,
  ContainerUlWorks,
  ContainerTitle,
  ContainerTechs,
} from "./styles";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiUser, FiCodesandbox, FiGitPullRequest } from "react-icons/fi";
import Button from "../../components/Button";
import api from "../../services/api";

function Dashboard({ authenticated, setAuthenticated }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || ""
  );
  const [userTechs, setUserTechs] = useState([]);

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const [registerTech, setRegisterTech] = useState(false);
  const [registerWork, setRegisterWork] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmitTech = (data) => {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("OK");
        console.log(response);
      })
      .catch((err) => console.log("Usuário não registrado!", err));

    user.techs = [...user.techs, data];

    reset();
    setRegisterTech(false);
  };

  const onSubmitWork = (data) => {
    api
      .post("/users/works", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        console.log("OK");
      })
      .catch((err) => console.log("Usuário não registrado!", err));

    if (data.title !== "" && data.status !== "") {
      user.works = [...user.works, data];
    }
    reset();
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
        <ContainerUlTechs>
          {user.techs.map((tech, index) => (
            <li key={index}>
              <h1>{<FiCodesandbox />}</h1>
              <div>
                <h3>{tech.title}</h3>
                <p>{tech.status}</p>
              </div>
            </li>
          ))}
        </ContainerUlTechs>
        {registerTech && (
          <ContainerModal>
            <form onSubmit={handleSubmit(onSubmitTech)}>
              <p>Casdastrar Tecnologia</p>
              <input maxLength="15" {...register("title")} />
              <input maxLength="15" {...register("status")} />
              <Button type="submit">Cadastrar</Button>
            </form>
          </ContainerModal>
        )}
      </ContainerTechs>

      {/* MEUS TRABALHOS */}
      <ContainerWorks>
        <section>
          <p>Meus Trabalhos</p>
          <button onClick={() => setRegisterWork(true)}>+</button>
        </section>
        <ContainerUlWorks>
          {user.works.map((work, index) => (
            <li key={index}>
              <h1>{<FiGitPullRequest />}</h1>
              <div>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <a target="_blank" href={work.deploy_url}>
                  Link da aplicação
                </a>
              </div>
            </li>
          ))}
        </ContainerUlWorks>
        {registerWork && (
          <ContainerModal>
            <form onSubmit={handleSubmit(onSubmitWork)}>
              <p>Casdastrar Trabalho</p>
              <input maxLength="13" {...register("title")} />
              <input maxLength="80" {...register("description")} />
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
