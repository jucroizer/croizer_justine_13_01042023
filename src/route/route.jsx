import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profil from "../pages/Profil";
import Login from "../pages/Login";
import Home from "../pages/Home"

function RouteManager(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Profil" element={<Profil />}></Route>
          </Routes>
        </Router>
      );
}
export default RouteManager