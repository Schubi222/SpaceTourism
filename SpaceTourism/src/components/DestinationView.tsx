
import DestinationNav from "./DestinationNav";
import Destination from "./Destination";

export default function DestinationView(){
    const style = {
        marginInline:"auto"
    }
    return(
        <div style={style}>
            <div className="subheading1">01 Pick your destination</div>

            <Destination/>
        </div>
    )
}