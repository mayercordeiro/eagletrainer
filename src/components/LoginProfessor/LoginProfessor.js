// CSS
import "./LoginProfessor.css";

const LoginProfessor = () => {
  return (
    <div className="auth_forms">
      <span id="soon">EM BREVE</span>
      <h2>Login como Professor:</h2>
      <form action="">
        <input type="text" placeholder="Digite o seu email" disabled />
        <input type="text" placeholder="Digite a sua senha" disabled />
        <a href="#">Esqueceu sua senha?</a>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginProfessor;
