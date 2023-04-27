import { useState } from "react";
import useFetch from "../API/FetchAPI";
import "../styles/Login.css"

function Edit() {

    // let navigate = useNavigate();

    const [firstNameValue, setFirstName] = useState({
        firstName : ""
    });

    const [lastNameValue, setLastName] = useState({
        lastName : ""
    });

    const updateUser = async (e) => {
        e.preventDefault();
        const { firstName } = firstNameValue;
        const { lastName } = lastNameValue;
        const response = await useFetch.updateUserName(firstName, lastName);
        console.log(response);

        if(response === true){
            console.log('update ok');
        }else{
            console.log('update ko');
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
                      value={firstNameValue.lastName}
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
