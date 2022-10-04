// ROUTER
import { NavLink } from "react-router-dom";
// CSS
import styles from "./MainMenu.module.css";
// IMAGES
import Menu from "../../assets/images/menu.svg";

const MainMenu = () => {
  return (
    <nav className={styles.navigation_auth}>
      <NavLink to="/">
        <img src={Menu} />
      </NavLink>
    </nav>
  );
};

export default MainMenu;
