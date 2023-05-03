import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nameChange } from "../store/store.js";
import useFetch from "../API/FetchAPI";
import "../styles/Login.css";

function Edit() {
  let navigate = useNavigate();

  const [firstNameValue, setFirstName] = useState({
    firstName: "",
  });

  const [lastNameValue, setLastName] = useState({
    lastName: "",
  });

  const [tokenValue, setToken] = useState({
    token: "",
  });


  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      const response = await useFetch.getUserProfile(
        setToken({ token: localStorage.getItem("token")})
      );
      console.log(response.body);
      setFirstName({ firstName: response.body.firstName });
      setLastName({ lastName: response.body.lastName });
    };
    getUser();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    const { firstName } = firstNameValue;
    const { lastName } = lastNameValue;
    const { token } = tokenValue;
    console.log("token",token);
    const response = await useFetch.updateUserName(firstName, lastName, token, true);
    console.log("reponse",response);

    if (response === true) {

      dispatch(nameChange(firstName, lastName));
      console.log("update ok");
      navigate("/Profil")
    } else {
      console.log("update ko");
    }
  };

  return (
    <div>
      <form onSubmit={updateUser}>
        <div className="input-wrapper">
          <label>FirstName</label>
          <input
            type="text"
            id="username"
            name="username"
            value={firstNameValue.firstName}
            onChange={(e) => setFirstName({ firstName: e.target.value })}
          />
        </div>
        <div className="input-wrapper">
          <label>LastName</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastNameValue.lastName}
            onChange={(e) => setLastName({ lastName: e.target.value })}
          />
        </div>

        <div>
          <button type="submit" className="sign-in-button">
            Edit Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
