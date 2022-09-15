export const LOGIN = "LOGIN";
export const CLEANER_USER = "CLEANER_USER";


// get password
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
        dispatch({ type: LOGIN, payload: login });
      });
  };
}

export const getNotifications = (idUser) => async dispatch => {
  try{
  return await fetch(`http://localhost:3001/notifications/idUser/${idUser}`)
    .then(r => r.json())
    .then(data => dispatch({ type: "GET_ALL_IDUSER_NOTIFICATIONS", payload: data }))
    .catch(error=> console.log('Error de fetch API'))
  }
  catch(error){
    console.log('Error de try API');
    throw new Error({error: error.messege}) 
  }
}

// Restablecer contraseña OK
export async function resetPassword(password){
    return fetch("http://localhost:3001/users/password",{
      method: "PUT",
      body: JSON.stringify(password),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((email) => console.log(email));
  }

  // Limpiar reducer user
  export function cleanerUser(){
    return {
      type: CLEANER_USER
    }
  }
