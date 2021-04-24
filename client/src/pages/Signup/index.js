import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <>
      <button style={{ marginTop: "10vh" }} onClick={() => loginWithRedirect()}>Log In</button>
      <button style={{ marginTop: "10vh" }} onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>

    </>
  )};

export default LoginButton;

