import React, { useState } from "react";
// ROUTER
import { NavLink } from "react-router-dom";
// CSS
import "./Home.css";
// COMPONENTS
import LoginAluno from "../../../components/LoginAluno/LoginAluno";
import LoginProfessor from "../../../components/LoginProfessor/LoginProfessor";

const Home = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <>
      <main>
        <h1>Sua evolução está Aqui!</h1>
        <p>
          Viver é estar continuamente motivado. O significado da vida não é
          simplesmente existir, sobreviver, mas sim crescer, alcançar e
          conquistar.
        </p>
        <p>- Arnold Schwarzenegger</p>
      </main>

      <div className="container_auth">
        <div className="auth">
          <div className="switch">
            <span
              className={`${
                activeTab === "tab1" ? "active_switch" : "switch_content"
              }`}
              onClick={handleTab1}
            >
              Aluno
            </span>
            <span
              className={`${
                activeTab === "tab2" ? "active_switch" : "switch_content"
              }`}
              onClick={handleTab2}
            >
              Professor
            </span>
          </div>

          {activeTab === "tab1" && (
            <>
              <LoginAluno />
            </>
          )}
          {activeTab === "tab2" && (
            <>
              <LoginProfessor />
            </>
          )}

          <NavLink to="/cadastro" className="register">
            Cadastro
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
