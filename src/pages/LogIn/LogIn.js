import logo from "./../../assets/logo.png";
import "./LogIn.css";
import Input from "./../../components/Input/Input";
import {useState } from "react";
import {useHistory} from "react-router-dom";

export default function LogIn(props) {
  const [data, setData] = useState({ email: "", password: "" });
  
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
      url: "http://localhost:8080/api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: dataForm,
    };
    
    axios(config)
      .then(function (response) {
        if (response.data === "datos incorrectos"){
          alert(JSON.stringify(response.data));
        }
        else{
          alert(JSON.stringify(response.data));        
          history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <div className="form">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={setInput}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={setInput}
        />
        <button onClick={sendData} className="buttonForm">
          Login
        </button>
      </div>
      <div className="haveAccount">
        ¿No tienes una cuenta?{" "}
        <button
          className="register"
          onClick={() =>{
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
