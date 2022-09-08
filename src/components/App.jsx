import React from "react";
import Form from "./Form.jsx";
// import Login from "./Login.jsx";

// var isLoggedIn = false;

var userIsRegistered = false;

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {" "}
      {
        <Form isRegistered={userIsRegistered} />
        //userIsRegistered === true  ?  <Login  /> : <Form />
        /* {renderConditionally()} */
        /*currentTime < 12 && <h1>Why are you still asleep</h1>*/
      }
    </div>
  );
}

export default App;
