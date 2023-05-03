import Header from "../components/Header";
import Footer from "../components/Footer";
import Edit from "../components/Edit";
// import Account from "../components/Acount";
import { Store } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
      <Header />
      <main className="main bg-dark">
        <p>C'est l'Edit</p>
        <Edit />
      </main>
      <Footer />
    </div>
  );
}

export default EditProfil;
