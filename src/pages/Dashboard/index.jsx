import {
  Container,
  ContainerWorks,
  ContainerModalTech,
  ContainerModalWork,
  ContainerUlTechs,
  ContainerUlWorks,
  ContainerTitle,
  ContainerTechs,
  ContainerUser,
  ContainerBody,
} from "./styles";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  FiUser,
  FiCodesandbox,
  FiGitPullRequest,
  FiSmartphone,
  FiMail,
  FiLogOut,
} from "react-icons/fi";
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

    if (data.title !== "" && data.status !== "") {
      user.techs = [...user.techs, data];
    }

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

    if (data.title !== "" && data.description !== "") {
      user.works = [...user.works, data];
    }
    reset();
    setRegisterWork(false);
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
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
          {" "}
          <FiLogOut />
        </button>
      </ContainerTitle>
      <ContainerBody>
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
            <ContainerModalTech>
              <form onSubmit={handleSubmit(onSubmitTech)}>
                <p>
                  Cadastrar Tecnologia{" "}
                  <button
                    onClick={() => {
                      reset();
                      setRegisterTech(false);
                    }}
                  >
                    x
                  </button>
                </p>
                <input
                  placeholder="Nome da Tecnologia"
                  maxLength="15"
                  {...register("title")}
                />
                <input
                  placeholder="Status"
                  maxLength="15"
                  {...register("status")}
                />
                <Button type="submit">Cadastrar</Button>
              </form>
            </ContainerModalTech>
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
            <ContainerModalWork>
              <form onSubmit={handleSubmit(onSubmitWork)}>
                <p>
                  Cadastrar Trabalho{" "}
                  <button
                    onClick={() => {
                      reset();
                      setRegisterTech(false);
                    }}
                  >
                    x
                  </button>
                </p>
                <input
                  placeholder="Nome do Trabalho"
                  maxLength="13"
                  {...register("title")}
                />
                <input
                  placeholder="Descrição"
                  maxLength="80"
                  {...register("description")}
                />
                <input placeholder="URL" {...register("deploy_url")} />
                <Button type="submit">Cadastrar</Button>
              </form>
            </ContainerModalWork>
          )}
        </ContainerWorks>

        {/* USER */}
        <ContainerUser>
          <header>
            <FiUser />
            <div>
              <h3>{user.name}</h3>
              <p>{user.course_module} Módulo</p>
              <span>{user.bio}</span>
            </div>
          </header>
          <main>
            <section>
              <FiSmartphone />
              <div>
                <p>Ligar agora</p>
                <span>{user.contact}</span>
              </div>
            </section>
            <article>
              <FiMail />
              <div>
                <p>Enviar email</p>
                <span>{user.email}</span>
              </div>
            </article>
            <button
              onClick={() => {
                setAuthenticated(false);
                localStorage.clear();
              }}
            >
              Sair
            </button>
          </main>
        </ContainerUser>
      </ContainerBody>
    </>
  );
}

export default Dashboard;
