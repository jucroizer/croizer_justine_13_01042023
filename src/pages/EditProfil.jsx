import Header from "../components/Header";
import Footer from "../components/Footer";
import Edit from "../components/Edit";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Account from "../components/Acount";
import { Store } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/Login.css";

function EditProfil() {
  const isLogged = Store.getState();
  console.log("logged", isLogged.isLogged);

  const token = localStorage.getItem("token");
  console.log(token);

  const navigate = useNavigate();

  useEffect(() => {
    if (token === null || isLogged.isLogged === false) {
      navigate("/");
    }
  }, [isLogged.isLogged]);

  return (
    <div>
      {/* <h1> Edit </h1> */}
      <Header />
      <main className="main bg-dark">
      <section className="sign-in-content">
          <h1>Edit Profile</h1>
          <Edit />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default EditProfil;
