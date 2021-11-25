import {
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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
import toast from "react-hot-toast";

function Dashboard({ authenticated, setAuthenticated }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || ""
  );
  const [userTechs, setUserTechs] = useState([...(user.techs || [])]);
  const [userWorks, setUserWorks] = useState([...(user.works || [])]);

  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const [registerTech, setRegisterTech] = useState(false);
  const [registerWork, setRegisterWork] = useState(false);

  // const formSchema = yup.object().shape({
  //   title: yup.string().required("Titulo obrigatório"),
  //   status: yup.string().required("Status obrigatório"),
  //   description: yup.string().required("Descrição obrigatória"),
  //   deploy_url: yup.string().required("Link obrigatório"),
  // });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(formSchema),
  });

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
      setUserTechs([...userTechs, data]);
      toast.success("Tecnologia adicionada com sucesso");
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
      setUserWorks([...userWorks, data]);
      toast.success("Trabalho adicionado com sucesso");
    }
    reset();
    setRegisterWork(false);
  };

  const deteleWork = (work_id) => {
    api
      .delete(`/users/works/${work_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log("Excluído com sucesso!"))
      .catch((err) => console.log(err));
    toast.success("Trabalho removido com sucesso");
    setUserWorks(userWorks.filter((element) => element.id !== work_id));
  };

  const deteleTech = (tech_id) => {
    console.log(tech_id);
    api
      .delete(`/users/techs/${tech_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => console.log("Excluído com sucesso!"))
      .catch((err) => console.log(err));
    toast.success("Tecnologia removida com sucesso");
    setUserTechs(userTechs.filter((element) => element.id !== tech_id));
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
            {userTechs.map((tech, index) => (
              <li key={index}>
                <h1>{<FiCodesandbox />}</h1>
                <div>
                  <h3>
                    {tech.title}{" "}
                    <button onClick={() => deteleTech(tech.id)}>x</button>
                  </h3>
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
            {userWorks.map((work, index) => (
              <li key={index}>
                <h1>{<FiGitPullRequest />}</h1>
                <div>
                  <h3>
                    {work.title}
                    <button onClick={() => deteleWork(work.id)}>x</button>
                  </h3>
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
                      setRegisterWork(false);
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
