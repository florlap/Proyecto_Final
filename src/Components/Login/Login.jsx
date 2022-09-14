import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import style from "./login.module.css";
import { useSelector } from "react-redux";
import { Change } from "./Change";
import { cleanerUser } from "../../redux/actions";

export default function Login(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const user = useSelector((state) => state.user);

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
    }, []);
  
    function handleCallbackResponse(response) {
      let object = jwt_decode(response.credential);
      dispatch(
        login({
          type: "GOOGLE",
          email: object.email,
        })
      );
    }
  

  ///// LOGIN LOCAL
  let initialState = {
    email: "",
    password: "",
    initialState: false,
  };

  let [input, setInput] = useState(initialState);

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(
      login({
        type: "LOCAL",
        email: input.email,
        password: input.password,
      })
    );
  }

  useEffect(() => {
    if(user[1] === "LOCAL"){
    if (user[0].initialState === true) {
      navigate("/change");
    } else if (user[0].initialState === false) {
      navigate("/principal");
    }
  } else if (user[1] === "GOOGLE") {
    navigate("/principal");
  }
  }, [user]);

  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <div className={style.contenedor}>
        <form className={style.login} onSubmit={handleOnSubmit}>
          <div className={style.message}>
            <label>mensaje escuela</label>
          </div>
          <div className={style.email}>
            <input
              type="email"
              placeholder="E-mail..."
              name="email"
              value={input.email}
              onChange={handleOnChange}
            />
          </div>
          <div className={style.password}>
            <input
              type="password"
              placeholder="Password.."
              name="password"
              value={input.password}
              onChange={handleOnChange}
            />
          </div>
          <div className={style.send}>
            <input type="submit" value="send" />
          </div>
          <div className={style.google}>
            <div id="signInDiv"></div>
          </div>
          <div className={style.reset}>
            <Link to="/reset">Restablecer contraseña</Link>
          </div>
          <div></div>
        </form>
      </div>
    </div>
  );
}
