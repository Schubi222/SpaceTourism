import {Link} from "react-router-dom";
import "../styles/Navigation.css"

export default function Navigation(){

    return(
        <div className={"Navigation-Wrapper"}>
            <img src="/src/assets/shared/logo.svg" alt="Logo"/>
            <span className={"line"}></span>
            <nav>
                <Link to={"/"} className={"NavText"}>
                    <span className={"NavText-number"}>00</span> Home
                </Link>
                <Link to={"/destination"} className={"NavText"}>
                    <span className={"NavText-number"}>01</span>destination
                </Link>
                <Link to={"/crew"} className={"NavText"}>
                    <span className={"NavText-number"}>02</span>crew
                </Link>
                <Link to={"/technology"} className={"NavText"}>
                    <span className={"NavText-number"}>03</span>technology
                </Link>
            </nav>
        </div>

    )
}