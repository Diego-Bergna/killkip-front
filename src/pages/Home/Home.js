import logo from "./../../assets/logo.png";
import "./Home.css";

export default function Home(props){
    return (
        <div>
            <a href="/login">Login</a>
            <img className="logo" src={logo} alt="logo"></img>
        </div>

        
    );
}