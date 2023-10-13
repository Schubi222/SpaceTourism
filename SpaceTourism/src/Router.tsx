import {createBrowserRouter} from "react-router-dom";
import HomeView from "./components/HomeView";
import App from "./components/App";
import DestinationView from "./components/DestinationView";
import CrewView from "./components/CrewView";
import TechnologyView from "./components/TechnologyView";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<HomeView/>
            },
            {
                path:"/destination",
                element:<DestinationView/>
            },
            {
                path:"/crew",
                element:<CrewView/>
            },
            {
                path:"/technology",
                element:<TechnologyView/>
            },
        ]
    }
])