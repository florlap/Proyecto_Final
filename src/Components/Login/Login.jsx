import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { login } from "../../redux/actions";
import { Link } from 'react-router-dom'


export default function Login(props) {
  let dispatch = useDispatch()
  ///// LOGIN LOCAL
  let initialState = {
    email: "",
    password: "",
  };

  let [input, setInput] = useState(initialState);

  function handleOnSubmit(e) {
    e.preventDefault()
    dispatch(login({
      type: "LOCAL",
      email: input.email,
      password: input.password,
    }))
  }

  function handleOnChange(e) {
    setInput({...input, [e.target.name]: e.target.value})
  }

  ////// LOGIN GOOOGLE
  useEffect(() =>{
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "486394313573-noddfecsuaim91rgmkknitask0qj6ed4.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    // eslint-disable-next-line
  },[])


  function handleCallbackResponse(response) {
    let object = jwt_decode(response.credential);
    dispatch(
      login({
        type: "GOOGLE",
        email: object.email,
      })
    );
  }


  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>
          <input type="text" placeholder="E-mail..." name="email" value={input.email} onChange={handleOnChange} />
        </label>
        <label>
          <input type="text" placeholder="Password.." name="password" value={input.password} onChange={handleOnChange}/>
        </label>
        <input type="submit" value="send" />
        <div id="signInDiv"></div>
      </form>
      <Link to='/reset'>Restablecer contraseña</Link>
    </div>
  );
}
