import { useState } from "react";
import useFetch from "../API/FetchAPI";
// import { Navigate } from "react-router-dom";


function Login() {

    // let [email, setEmail] = useState("");
    // let [password, setPassword] = useState("");

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        console.log(credentials);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        const user = { email, password };

        const response = await useFetch.login(user);
        console.log(response);

        if(response === "ok"){
            console.log('connexion ok');
        }else{
            console.log('connexion ko');
        }
    };

    // let [token, setToken] = useState("");
 
    // function recupData(){
    //     const fetchData = async () => { 
    //         const emailData = await useFetch.login(email);
    //         const passwordData = await useFetch.login(password);
    //         console.log('email', emailData);
    //         console.log('password', passwordData);

    //         if(emailData === email && passwordData === password){
    //             Navigate('/Profil');
    //             console.log('connexion ok');
    //         }else{
    //             console.log('connexion ko');
    //         }
    //     }
    //     fetchData();
    // }
  
    return (
      <div>
          <form onSubmit={onSubmit}>
              <div className="input-wrapper">
                  <label>Username</label>
                  <input
                      type="text"
                      id="username"
                      name="email"
                      value={credentials.email}
                      onChange={onChange}
                  />
              </div>
              <div className="input-wrapper">
                  <label>Password</label>
                  <input
                      type="password"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={onChange}
                  />
              </div>
              <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label>Remember me</label>
              </div>

              <div>
                  <button type="submit" className="sign-in-button" >
                      Sign In
                  </button>
              </div>
          </form>
      </div>
  );
}

export default Login;
