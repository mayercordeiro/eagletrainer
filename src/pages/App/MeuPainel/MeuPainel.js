// ROUTER
import { NavLink } from "react-router-dom";
// CSS
import styles from "./MeuPainel.module.css";
// COMPONENTS
import UserImage from "../../../components/UserImage/UserImage";

const MeuPainel = () => {
  const user = "Guilherme";

  return (
    <section className={styles.meu_painel}>
      <h3>Meu Painel</h3>
      <div className={styles.intro}>
        <h1>Bem Vindo</h1>
        <UserImage />
        <span className={styles.userName}>{user}</span>
        <NavLink to="/painel/meus-dados">
          <button className={styles.btnEdit}>Editar</button>
        </NavLink>
      </div>
    </section>
  );
};

export default MeuPainel;
