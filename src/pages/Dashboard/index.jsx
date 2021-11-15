import {
  Container,
  ContainerData,
  ContainerModal,
  ContainerUl,
} from "./styles";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { FiArrowRight, FiArrowDown, FiArrowLeft } from "react-icons/fi";
import Button from "../../components/Button";
import api from "../../services/api";

function Dashboard({ authenticated, setAuthenticated }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || []
  );

  const [registerTech, setRegisterTech] = useState(false);
  const [registerWork, setRegisterWork] = useState(false);

  const [newTech, setNewTech] = useState("");
  const [newTechStatus, setNewTechStatus] = useState("");

  const [newWork, setNewWork] = useState("");
  const [newWorkDescription, setNewWorkDescription] = useState("");

  const history = useHistory();

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  const handleClickNewTech = ({ ...rest }) => {
    user.techs = [...user.techs, rest];
    // PAREI AQUI!! TENTAR MANDAR ESSA REQUISICAO
    // api.post(`users/${user.id}`)
    setRegisterTech(false);
  };

  const handleClickNewWork = ({ ...rest }) => {
    user.works = [...user.works, rest];
    setRegisterWork(false);
  };

  return (
    <Container>
      {/* HEADER */}
      <ContainerData>
        <div>
          <p>Kenzie Hub</p>
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
        {registerTech && (
          <ContainerModal>
            <div>
              <p>Casdastrar Tecnologia</p>
              <input onChange={(evt) => setNewTech(evt.target.value)} />
              <input onChange={(evt) => setNewTechStatus(evt.target.value)} />
              <Button
                onClick={() => {
                  handleClickNewTech({ title: newTech, status: newTechStatus });
                }}
              >
                Cadastrar
              </Button>
            </div>
          </ContainerModal>
        )}
      </ContainerData>

      {/* MEUS TRABALHOS */}
      <ContainerData>
        <div>
          <p>Meus Trabalhos</p>
          <Button onClick={() => setRegisterWork(true)}>+</Button>
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
            <div>
              <p>Casdastrar Trabalho</p>
              <input onChange={(evt) => setNewWork(evt.target.value)} />
              <input
                onChange={(evt) => setNewWorkDescription(evt.target.value)}
              />
              <Button
                onClick={() =>
                  handleClickNewWork({
                    title: newWork,
                    description: newWorkDescription,
                  })
                }
              >
                Cadastrar
              </Button>
            </div>
          </ContainerModal>
        )}
      </ContainerData>
    </Container>
  );
}

export default Dashboard;
