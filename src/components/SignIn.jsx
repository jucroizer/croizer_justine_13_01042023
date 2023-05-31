import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../API/FetchAPI";
import { useDispatch } from "react-redux";
import { login } from "../store/store.js";

function Login() {
  let navigate = useNavigate();

  const [emailValue, setEmail] = useState({
    email: "",
  });
  const [passwordValue, setPassword] = useState({
    password: "",
  });


  const dispatch = useDispatch();
  // console.log(dispatch);

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email } = emailValue;
    const { password } = passwordValue;
    const response = await useFetch.login(email, password);
    // console.log("response sign in ",response)

    if (response === true) {
      let userInfo = await useFetch.getUserProfile(
        localStorage.getItem("token")
      );
      console.log(userInfo.body);

      let user = userInfo.body;
      // console.log(user);
      let firstName = user.firstName;
      // console.log(firstName);
      let lastName = user.lastName;
      // console.log(lastName);
      let id = user.id;
      // console.log(id);
      let token = localStorage.getItem("token");
      // console.log(token);

      dispatch(login(firstName, lastName, id, token, true));
      console.log("connexion ok");
      navigate("/Profil");
    } else {
      console.log("connexion ko");
      alert("Vos identifiants sont incorrects, veuillez réessayer.");
    }
  };

  // console.log(dispatch);

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
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
