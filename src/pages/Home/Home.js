import logo from "./../../assets/logo.png";
import { useHistory } from "react-router-dom";
import "./Home.scss";


export default function Home(props) {
    const history = useHistory();
    return (
        <div className="homeContainer">
            <img className="logo" src={logo} alt="logo"></img>
            <div>
                <button className="buttonLogin" onClick={() => {
                    history.push("/login");
                }}>Login</button>
            </div>

        </div>


    );
}
