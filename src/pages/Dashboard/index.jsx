import { Container, ContainerData } from "./styles";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import api from "../../services/api";
import { useParams, Redirect } from "react-router-dom";

function Dashboard({ authenticated }) {
  const [techs, setTechs] = useState([]);
  const params = useParams();

  useEffect(() => {
    // api.get();
  }, []);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      {/* HEADER */}
      <ContainerData>
        <div>
          <p>Kenzie Hub</p>
          <img />
        </div>
      </ContainerData>

      {/* MINHAS TECNOLOGIAS */}
      <ContainerData>
        <div>
          <p>Minhas Tecnologias</p>
          <Button>+</Button>
        </div>
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
