import Header from "../components/Header";
import Footer from "../components/Footer";
import Account from "../components/Acount";
// import { useSelector } from "react-redux";
import { Store } from "../store/store";


function Profil() {

  
  const isLogged = Store.getState();
  console.log("logged", isLogged.isLogged)

  if(isLogged.isLogged === false){
    window.location.href = "/SignIn";
  }

  const firstName = isLogged.firstName;
  console.log(firstName)
  const lastName = isLogged.lastName;
  console.log(lastName)

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
          <button className="edit-button">Edit Name</button>
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
