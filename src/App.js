import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
