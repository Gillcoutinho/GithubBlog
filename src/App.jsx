import { Header } from "./componentes/Header";
import { Profile } from "./componentes/Profile";
import { Publication } from "./componentes/Publication";
import { Postlink } from "./componentes/Postlink";
import { Postinfo } from "./componentes/Postinfo";
import styles from "./app.module.css";
import { BrowserRouter } from "react-router-dom";
import { CustomRoutes } from "./routes";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </div>
  );
}
