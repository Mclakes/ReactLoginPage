import React from "react";
import Input from "./Input.jsx";

function Login() {
  return (
    <form>
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="Password" />
      {/* <input type="password" placeholder="Confirm Password" /> */}
      <button type="submit">Login</button>
    </form>
  );
}
export default Login;
