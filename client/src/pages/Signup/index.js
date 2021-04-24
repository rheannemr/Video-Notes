import React, { useState } from "react";
import PassportInput from "../Passport-Inputs/passport-inputs";
import Axios from "axios";
import "./index.css"

function Passport() {
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const signup = () => {
    console.log("username is: ", signUpUsername);
    console.log("password is: ", signUpPassword);
    Axios({
      method: "POST",
      data: {
        username: signUpUsername,
        password: signUpPassword,
      },
      withCredentials: true,
      url: "http://localhost:3000/signup",
    }).then((res) => console.log("signup POST console.log of res: ", res));
  };

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: "http://localhost:3001/login",
    }).then((res) => console.log("login POST console.log of res: ", res));
  };

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3000/user",
    }).then((res) => console.log("getUser GET console.log of res: ", res));
  };

  return (
    <div className="App" style={{ marginTop: "10vh" }}>
      <div>
        <PassportInput
          title="SignUp"
          usernamePlaceholder="create username"
          passwordPlaceholder="create password"
          stateFunctionUsername={e => setSignUpUsername(e.target.value)}
          stateFunctionPassword={e => setSignUpPassword(e.target.value)}
          clickHandler={signup} />

        <PassportInput
          title="Login"
          usernamePlaceholder="enter username"
          passwordPlaceholder="enter password"
          stateFunctionUsername={e => setLoginUsername(e.target.value)}
          stateFunctionPassword={e => setLoginPassword(e.target.value)}
          clickHandler={login} />

        <button
          onClick={getUser}>Find User
        </button>

      </div>
    </div>
  );
}

export default Passport;