import logo from "./../../assets/logo.png";
import "./LogIn.scss";
import Input from "./../../components/Input/Input";
import InputPassword from "./../../components/InputPassword/InputPassword";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import eyeIcon from "./../../assets/Vector.png";


export default function LogIn(props) {
  const [data, setData] = useState({ email: "", password: "" });
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };



  /////
  //function Redirect(){
  const [Redirect, SetRedirect] = useState(false);
  useEffect(() => {
    if (Redirect) {
      // window.location.href = "https://form.7170s.com/lobby";
      history.push("/lobby");
    }
  }, [Redirect]);

  //}


  ////
  const setInput = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const history = useHistory();
  const sendData = (e) => {
    e.preventDefault();
    let axios = require("axios");
    let dataForm = JSON.stringify({
      email: data.email,
      password: data.password,
    });

    let config = {
      method: "post",
      url: "https://killkip-backend.herokuapp.com/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: dataForm,
    };

    axios(config)
      .then(function (response) {
        if (response.data === "logeo exitoso") {
          alert(JSON.stringify(response.data));
          //history.push("/");
          //window.location.href("https://www.google.com/");
          SetRedirect(true);

        }
        else {
          alert(JSON.stringify(response.data));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <div className="loginform">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={setInput}
        />
        <div className="inputPasswordContainer">
          <InputPassword
            type={passwordShown ? "text" : "password"}
            placeholder="Contraseña"
            name="password"
            onChange={setInput}
          />
          <img className="eyeIcon" src={eyeIcon} alt="eyeIcon" onClick={togglePassword} />
        </div>

        <button onClick={sendData} className="buttonForm">
          Login
        </button>
      </div>
      <div className="haveAccount">
        ¿No tienes una cuenta?{" "}
        <button
          className="register"
          onClick={() => {
            history.push("/signin");
          }}
        >
          Regístrate
        </button>
      </div>
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}
