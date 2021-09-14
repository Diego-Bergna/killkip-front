import logo from "./../../assets/logo.png";
import "./Lobby.scss";
import { useHistory } from "react-router-dom";
export default function Lobby(props) {
    const history = useHistory();
    return (
        <div className="lobbyContainer">
            <h1>Lobby</h1>
            <div className="lobbyform">
                <button
                    className="form"
                    onClick={() => {
                        // history.push("https://form.7170s.com/index.html");
                        window.location.href = "https://form.7170s.com/index.html";
                    }}> Formulario
                </button>
            </div>



        </div>


    );
}