import React, { useState } from 'react';
import { Container } from '../../GlobalStyles';
import LoginIcon from '../../assets/login.svg';
import { Link, useHistory } from 'react-router-dom';
import api from '../../api/api'
import './styles.css';

export default function Login() {
  const [validLogin, setValidLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();



  async function handleLogin(e) {
    e.preventDefault();

    let responseLogin;
    try {
      responseLogin = await api.get("api/login/", {
        auth: {
          username: email,
          password: password,
        },
      });

      setValidLogin("");
      localStorage.setItem("LOGINPET_TOKEN", responseLogin.data.token);
      history.push("/generator");
    } catch (err) {
      console.log(err)
      alert("Login não é válido");
    }
  }



  return (
    <Container>
      <main>
        <h1>QR Gen</h1>
        <section id="input-section">
          <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        </section>
        <Link to="/generator">
          <button className="botao" id="botao" onClick={handleLogin}>
            <img src={LoginIcon} alt="" />
          </button>

        </Link>
        {/* <StyledButton type="submit">ICONEAQUI</StyledButton> */}
      </main>
    </Container>
  );
}
