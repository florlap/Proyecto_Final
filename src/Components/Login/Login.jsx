import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { login } from "../../redux/actions";
import style from "./login.module.css";



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
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  ////// LOGIN GOOOGLE
  useEffect(() => {
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
  }, [])


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
    <div >
      <div className={style.contenedor}>
        <form className={style.login} onSubmit={handleOnSubmit}>
          <div className={style.message}>
            <label>mensaje escuela</label>
          </div>
          <div className={style.email}>
            <input type="email" placeholder="E-mail..." name="email" value={input.email} onChange={handleOnChange} />
          </div>
          <div className={style.password}>
            <input type="password" placeholder="Password.." name="password" value={input.password} onChange={handleOnChange} />
          </div>
          <div className={style.send}>
            <input type="submit" value="send" />
          </div>
          <div className={style.google}>
            <div id="signInDiv"></div>
          </div>
          <div className={style.reset}>
            <Button variant="contained" size="small" >
              <Link to='/reset' variant="outlined" component="label">Restablecer contraseña</Link>
            </Button>
          </div>
        </form>
      </div>

    </div>



  );
}
