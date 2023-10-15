import {useParams} from "react-router-dom";
import data from "../data.json"
import "../styles/Destination.css"
import DestinationNav from "./DestinationNav";

export default function Destination(){
    const {destination} = useParams()
    const destToNumber = () =>{
        switch (destination) {
            case 'moon':
                return 0
            case 'mars':
                return 1
            case 'europa':
                return 2
            case 'titan':
                return 3
            default:
                return 0
        }
    }
    const {name, images, description, distance, travel} = data.destinations[destToNumber()]
    return(
        <div className="Destination-Wrapper">
            <img src={images.png} alt="test"/>
            <div className={"Destination-Info-Wrapper"}>
                <DestinationNav/>
                <div className="heading1">{name}</div>
                <div>{description}</div>
                <hr/>
                <div className="Bottom-Info-Wrapper">
                    <div className={"subheading2"}>AVG. Distance</div>
                    <div className={"subheading2"}>Est. Travel Time</div>
                    <div className={"subheading1"}>{distance}</div>
                    <div className={"subheading1"}>{travel}</div>
                </div>
            </div>
        </div>

    )
}