// import axios from "axios"

export const LOGIN = "LOGIN";


export function login(input) {
  return function (dispatch) {
    return fetch("http://localhost:3001/users/password", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((login) => {
        console.log(login);
        dispatch({ type: LOGIN, payload: login });
      });
  };
}


export function resetPassword(email){
  console.log(email);
    return fetch("http://localhost:3001/users/passwords",{
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((email) => {return email}      
    );
  }
