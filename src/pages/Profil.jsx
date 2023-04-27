import Header from "../components/Header";
import Footer from "../components/Footer";
import Account from "../components/Acount";
import { Store } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Profil() {

  
  const isLogged = Store.getState();
  console.log("logged", isLogged.isLogged)

  const token = localStorage.getItem('token');
  console.log(token)

  const navigate = useNavigate();

  useEffect(() => { 
    if(token === null || isLogged.isLogged === false){
      navigate('/');
    }
  }, [isLogged.isLogged]);


  const firstName = isLogged.firstName;
  const lastName = isLogged.lastName;


  const edit = () => {
    navigate('/EditProfil');
  }
  
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button className="edit-button" onClick={edit}>Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </div>
  );
}

export default Profil;
