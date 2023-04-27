import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import useFetch from "../API/FetchAPI";
import "../styles/Login.css"
// import { useDispatch } from "react-redux";
// import { login } from "../store/store.js";
// import store from "../redux/store.js";

function Edit() {

    // let navigate = useNavigate();

    const [firstNameValue, setFirstName] = useState({
        firstName : ""
    });

    const [lastNameValue, setLastName] = useState({
        lastName : ""
    });

    // const [emailValue, setEmail] = useState({
    //     email : ""
    // });
    // const [passwordValue, setPassword] = useState({
    //     password : ""
    // });

    // const dispatch = useDispatch();
    // console.log(dispatch);

    const onSubmit = async (e) => {
        e.preventDefault();
        const { firstName } = firstNameValue;
        const { lastName } = lastNameValue;
        const response = await useFetch.updateUserName(firstName, lastName);
        console.log(response)

        // if(response === true){
        //     let userInfo = await useFetch.getUserProfile(localStorage.getItem('token'));
        //     console.log(userInfo.body);

        //     let user = userInfo.body;
        //     console.log(user)
        //     let firstName = user.firstName;
        //     console.log(firstName)
        //     let lastName = user.lastName;
        //     console.log(lastName)
        //     let id = user.id;
        //     console.log(id)
        //     let token = localStorage.getItem('token');
        //     console.log(token)


        //     dispatch(login(firstName, lastName, id, token, true));
        //     console.log('connexion ok');
        //     navigate('/Profil');
        // }else{
        //     console.log('connexion ko');
        //     alert('Vos identifiants sont incorrects, veuillez réessayer.');
        // }
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
                      name="username"
                      value={firstNameValue.lastName}
                      onChange={(e) => setFirstName({ firstName: e.target.value })}
                  />
              </div>
              <div className="input-wrapper">
                  <label>Password</label>
                  <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={lastNameValue.lastName}
                      onChange={(e) => setLastName({ lastName: e.target.value })}
                  />
              </div>

              <div>
                  <button type="submit" className="sign-in-button" >
                      Edit Profile
                  </button>
              </div>
          </form>
      </div>
  );
}

export default Edit;
