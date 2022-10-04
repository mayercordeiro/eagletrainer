// ROUTER
import { NavLink, useLocation, Outlet } from "react-router-dom";
// CSS
import "./App.css";
// IMAGES
import Home from "../../assets/images/home.svg";
import User from "../../assets/images/user.svg";
import Workout from "../../assets/images/workout.svg";
import Avaliacao from "../../assets/images/avaliacao.svg";
// COMPONENTS
import MainMenu from "../../components/MainMenu/MainMenu";
import ContainerApp from "../../components/ContainerApp/ContainerApp";

const App = () => {
  let location = useLocation();

  const paths = {
    painel: "/painel",
    meusDados: "/painel/meus-dados",
  };

  return (
    <>
      <MainMenu />
      <nav className="headerApp">
        <div className="navigation">
          <ul>
            <li
              className={`list ${
                location.pathname === paths.painel ? "activeMenu" : ""
              }`}
            >
              <NavLink to="/painel">
                <span className="icon">
                  <img src={Home} alt="Ir para Home" />
                </span>
              </NavLink>
            </li>
            <li
              className={`list ${
                location.pathname === paths.meusDados ? "activeMenu" : ""
              }`}
            >
              <NavLink to="/painel/meus-dados">
                <span className="icon">
                  <img src={User} alt="Ir para Usuário" />
                </span>
              </NavLink>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </nav>
      <ContainerApp>
        <Outlet />
      </ContainerApp>
    </>
  );
};

export default App;
