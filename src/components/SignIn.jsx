import { useState } from "react";
import useFetch from "../API/FetchAPI";
// import { Navigate } from "react-router-dom";


function Login() {

    const [emailValue, setEmail] = useState({
        email : ""
    });
    const [passwordValue, setPassword] = useState({
        password : ""
    });

    // const [credentials, setCredentials] = useState({
    //     email: "",
    //     password: "",
    // });

    // console.log(credentials);
    // const onChange = (e) => {
    //     setCredentials({ ...credentials, [e.target.name]: e.target.value });
    //     console.log(credentials);
    // };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { email } = emailValue;
        console.log("email",email);
        const { password } = passwordValue;
        console.log("password",password);
        const user = { email, password };
        console.log("user",user);

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
                      value={emailValue.email}
                      onChange={(e) => setEmail({ email: e.target.value })}
                  />
              </div>
              <div className="input-wrapper">
                  <label>Password</label>
                  <input
                      type="password"
                      id="password"
                      name="password"
                      value={passwordValue.password}
                      onChange={(e) => setPassword({ password: e.target.value })}
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
