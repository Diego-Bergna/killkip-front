import logo from "./../../assets/logo.png";
import "./SignIn.css";
import Input from "../../components/Input/Input";
import { useState } from "react";
import { useHistory } from "react-router";

export default function SignIn(props) {
  const history = useHistory()
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    password1: "",
    password2: "",
  });
  const setInput = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const sendData = (e) => {
    if (data.password1 === data.password2) {
      let axios = require("axios");
      let data2 = JSON.stringify({
        name: data.fName,
        lastname: data.lName,
        email: data.email,
        password: data.password1,
      });

      let config = {
        method: "post",
        url: "https://killkip-backend.herokuapp.com/api/registerUser",
        headers: {
          "Content-Type": "application/json",
        },
        data: data2,
      };

      axios(config)
        .then(function (response) {
          if (response.data === "usuario no añadido"){
            alert(JSON.stringify(response.data));
          }
          else{
            alert(JSON.stringify(response.data));
            history.push("/login");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Las contraseñas no son las mismas");
    }
  };
  return (
    <div className="container">
      <h1>SignIn</h1>
      <div className="form">
        <Input
          type="text"
          placeholder="Nombres"
          name="fName"
          onChange={setInput}
        />
        <Input
          type="text"
          placeholder="Apellidos"
          name="lName"
          onChange={setInput}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={setInput}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          name="password1"
          onChange={setInput}
        />{" "}
        <Input
          type="password"
          placeholder="Confirmar Contraseña"
          name="password2"
          onChange={setInput}
        />
        <button onClick={sendData} className="buttonForm">
          SignIn
        </button>
        <button
          onClick={() =>{
            history.push("/login");
          }}
          className="back"
        >
          LogIn
        </button>
      </div>
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}
