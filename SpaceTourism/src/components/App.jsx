import { useState } from 'react'

import '../styles/App.css'
import Navigation from "./Navigation.tsx";
import {Outlet} from "react-router-dom";

function App() {


  return (
    <>
        <Navigation/>
        <Outlet/>
    </>
  )
}

export default App
