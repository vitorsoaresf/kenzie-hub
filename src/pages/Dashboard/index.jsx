import {
  Container,
  ContainerData,
  ContainerModal,
  ContainerUl,
} from "./styles";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

function Dashboard({ authenticated, setAuthenticated }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || []
  );

  const [registerTech, setRegisterTech] = useState(false);
  const [registerWork, setRegisterWork] = useState(false);

  const history = useHistory();
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      {/* HEADER */}
      <ContainerData>
        <div>
          <p>Kenzie Hub</p>
          {/* <img /> */}
          <Button
            onClick={() => {
              setAuthenticated(false);
              localStorage.clear();
            }}
          >
            Sair
          </Button>
        </div>
      </ContainerData>

      {/* MINHAS TECNOLOGIAS */}
      <ContainerData>
        <div>
          <p>Minhas Tecnologias</p>
          <Button onClick={() => setRegisterTech(true)}>+</Button>
        </div>
        <ContainerUl>
          {user.techs.map((tech, index) => (
            <li key={index}>
              <h1>{<FiArrowRight />}</h1>
              <div>
                <h3>{tech.title}</h3>
                <p>{tech.status}</p>
              </div>
            </li>
          ))}
        </ContainerUl>
        {/* {registerTech && (
          <ContainerModal>
            <div>
              <p>Casdastrar Tecnologia</p>
              <input onChange={(evt) => setNewTech(evt.target.value)} />
              <input onChange={(evt) => setNewTech(evt.target.value)} />
              <Button
                onClick={() => {
                  const techs = [...user.techs,{}]
                  api.post("/users/techs");

                  setRegisterTech(false);
                }}
              >
                Cadastrar
              </Button>
            </div>
          </ContainerModal>
        )} */}
      </ContainerData>

      {/* MEUS TRABALHOS */}
      <ContainerData>
        <div>
          <p>Meus trabalhos</p>
          <Button>+</Button>
        </div>
        <ContainerUl>
          {user.works.map((work, index) => (
            <li key={index}>
              <a href={work.deploy_url}>
                <h1>{<FiArrowDown />}</h1>
                <div>
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ContainerUl>
      </ContainerData>
    </Container>
  );
}

export default Dashboard;
