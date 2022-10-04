// ROUTER
import { NavLink, useLocation, Outlet } from "react-router-dom";
// CSS
import "./Auth.css";
// IMAGES
import Logo from "../../assets/images/logo-eagle-trainer.svg";
// COMPONENTS
import MainMenu from "../../components/MainMenu/MainMenu";

const Auth = () => {
  let location = useLocation();
  let page = location.pathname === "/" || location.pathname === "/cadastro";

  return (
    <>
      <header>
        <MainMenu />

        {page && (
          <div className={location.pathname === "/cadastro" ? "hide" : "logo"}>
            <NavLink to="/painel">
              <img src={Logo} />
            </NavLink>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Auth;
