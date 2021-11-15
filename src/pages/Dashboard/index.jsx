import { Container, ContainerData } from "./styles";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { Redirect, useHistory } from "react-router-dom";

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
          <Button>+</Button>
        </div>
        <ul>
          {user.techs.map((tech, index) => {
            <li key={index}>{tech}</li>;
          })}
        </ul>
      </ContainerData>

      {/* MEUS TRABALHOS */}
      <ContainerData>
        <div>
          <p>Meus trabalhos</p>
          <Button>+</Button>
        </div>
      </ContainerData>
    </Container>
  );
}

export default Dashboard;
