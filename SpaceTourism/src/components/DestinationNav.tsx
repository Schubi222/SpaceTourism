import {NavLink} from "react-router-dom";

export default function DestinationNav() {
    const style = {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        paddingRight:"30px"
    }
    return(
        <nav style={style}>
            <NavLink to={"/destination/moon"} className={"NavText"}>Moon</NavLink>
            <NavLink to={"/destination/mars"} className={"NavText"}>Mars</NavLink>
            <NavLink to={"/destination/europa"} className={"NavText"}>Europa</NavLink>
            <NavLink to={"/destination/titan"} className={"NavText"}>Titan</NavLink>
        </nav>
    )

}