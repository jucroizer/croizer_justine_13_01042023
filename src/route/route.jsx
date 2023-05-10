import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Profil from "../pages/Profil";
import Login from "../pages/Login";
import Home from "../pages/Home"
import EditProfil from "../pages/EditProfil";
import Error from "../pages/Error";

function RouteManager(){
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Profil" element={<Profil />}></Route>
            <Route path="/EditProfil" element={<EditProfil />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Router>
      );
}
export default RouteManager