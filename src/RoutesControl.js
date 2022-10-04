// ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PAGES
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Auth/Home/Home";
import Cadastro from "./pages/Auth/Cadastro/Cadastro";
import App from "./pages/App/App";
import MeuPainel from "./pages/App/MeuPainel/MeuPainel";
import MeusDados from "./pages/App/MeusDados/MeusDados";
// COMPONENTS
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const RoutesControl = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Route>
        <Route path="/painel" element={<App />}>
          <Route path="/painel" element={<MeuPainel />} />
          <Route path="/painel/meus-dados" element={<MeusDados />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesControl;
