import { useState } from "react";
// CSS
import styles from "./Cadastro.module.css";
// ROUTER
import { NavLink } from "react-router-dom";
// COMPONENTS
import Input from "../../../components/Form/Input";

const Cadastro = () => {
  const [user, setUser] = useState({});
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  const classNome = {
    cadastro: "form_input",
  };

  return (
    <section className={styles.register_container}>
      <div className={styles.register}>
        <div className={styles.register_header}>
          <h1>Criar Conta</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles.register_form}
          action=""
        >
          <Input
            classNome={classNome.cadastro}
            text="Nome"
            type="text"
            name="first_name"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.cadastro}
            text="Sobrenome"
            type="text"
            name="last_name"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.cadastro}
            text="Data de nascimento"
            type="date"
            name="birth_date"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.cadastro}
            text="Email"
            type="text"
            name="email"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.cadastro}
            text="Telefone"
            type="text"
            name="phone"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.cadastro}
            text="Senha"
            type="text"
            name="pw"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.cadastro}
            text="Confirme sua senha"
            type="text"
            name="confirmpw"
            handleOnChange={handleChange}
          />
          <NavLink to="/" className="loginpage">
            Tem uma conta? Conecte-se
          </NavLink>

          <input type="submit" value="Criar Conta" />
        </form>
      </div>
    </section>
  );
};

export default Cadastro;
