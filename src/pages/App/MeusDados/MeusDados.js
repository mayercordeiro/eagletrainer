import { useState } from "react";
// CSS
import "./MeusDados.css";
// COMPONENTS
import UserImage from "../../../components/UserImage/UserImage";
import Input from "../../../components/Form/Input";

const MeusDados = () => {
  const user = "Guilherme";
  const [editUser, setEditUser] = useState({});
  function handleChange(e) {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(editUser);
  }

  const classNome = {
    dados: "form_input form_input_dados",
    sobrenome: "form_input form_input_dados form_input_sobrenome",
  };

  console.log(classNome.dados);

  return (
    <section className="meu_dados">
      <h3>Meus Dados</h3>
      <div className="meu_dados_content">
        <UserImage />
        <form action="">
          <Input
            classNome={classNome.dados}
            text="Nome"
            type="text"
            name="first_name"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.sobrenome}
            text="Sobrenome"
            type="text"
            name="last_name"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.dados}
            text="Data de nascimento"
            type="date"
            name="birth_date"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.dados}
            text="Email"
            type="text"
            name="email"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.dados}
            text="Telefone"
            type="text"
            name="phone"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.dados}
            text="Senha"
            type="text"
            name="pw"
            handleOnChange={handleChange}
          />
          <Input
            classNome={classNome.dados}
            text="Confirme sua senha"
            type="text"
            name="confirmpw"
            handleOnChange={handleChange}
          />
        </form>
      </div>
    </section>
  );
};

export default MeusDados;
