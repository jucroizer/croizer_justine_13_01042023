import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../API/FetchAPI";

function Login() {

    let navigate = useNavigate();

    const [emailValue, setEmail] = useState({
        email : ""
    });
    const [passwordValue, setPassword] = useState({
        password : ""
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const { email } = emailValue;
        console.log("email",email);
        const { password } = passwordValue;
        console.log("password",password);

        const response = await useFetch.login(email, password);
        console.log(response);

        if(response === true){
            let userInfo = await useFetch.getUserProfile(localStorage.getItem('token'));
            console.log(userInfo.body);

            let user = userInfo.body;
            console.log(user)
            let firstName = user.firstName;
            console.log(firstName)
            let lastName = user.lastName;
            console.log(lastName)
            let token = localStorage.getItem('token');
            console.log(token)

            console.log('connexion ok');
            navigate('/Profil');
        }else{
            console.log('connexion ko');
        }
    };
  
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
