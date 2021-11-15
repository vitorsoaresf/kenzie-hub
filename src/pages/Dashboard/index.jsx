import { Container, ContainerData } from "./styles";
import Button from "../../components/Button";

function Dashboard() {
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
