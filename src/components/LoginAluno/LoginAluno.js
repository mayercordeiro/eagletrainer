// CSS
import "./LoginAluno.css";

const LoginAluno = () => {
  return (
    <div className="auth_forms">
      <h2>Login como Aluno:</h2>
      <form action="">
        <input type="text" placeholder="Digite o seu email" />
        <input type="text" placeholder="Digite a sua senha" />
        <a href="#">Esqueceu sua senha?</a>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginAluno;
