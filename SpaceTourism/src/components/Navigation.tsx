import {NavLink} from "react-router-dom";
import "../styles/Navigation.css"

export default function Navigation(){

    return(
        <div className={"Navigation-Wrapper"}>
            <img src="/src/assets/shared/logo.svg" alt="Logo"/>
            <span className={"line"}></span>
            <nav>
                <NavLink to={"/"} className={`NavText`}>
                    <span className={"NavText-number"}>00</span> Home
                </NavLink>
                <NavLink to={"/destination"} className={`NavText`} >
                    <span className={"NavText-number"}>01</span>destination
                </NavLink>
                <NavLink to={"/crew"} className={`NavText`} >
                    <span className={"NavText-number"}>02</span>crew
                </NavLink>
                <NavLink to={"/technology"} className={`NavText`} >
                    <span className={"NavText-number"}>03</span>technology
                </NavLink>
            </nav>
        </div>

    )
}