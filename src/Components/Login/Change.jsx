import { useState } from "react";
import { resetPassword } from "../../redux/actions";
import style from "./change.module.css";

export default function Change(props) {

  const initialState = {
    idUser:"",
    password: "",
    newPassword: ""
  }

  const [reset, setReset] = useState(initialState);

  function handleOnSubmit(e) {
    e.preventDefault();
    resetPassword({
      type: "CHANGE",
      idUser: reset.idUser,
      password: reset.password
    });
  }

  function handleOnChange(e) {
    setReset({...reset, [e.target.name]: e.target.value});

  }
  return (
    <div>
      <div className={style.contenedor}>
        <form className={style.change} onSubmit={handleOnSubmit}>
          <div className={style.message}>
            <label>cambie pues la contraseña rapido</label>
          </div>
          <div className={style.password}>
            <input
              type="password"
              name="password"
              placeholder="Contraseña nueva"
              onChange={handleOnChange}
            />
          </div>
          <div className={style.newPassword}>
            <input
              type="password"
              name="newPassword"
              placeholder="Repetir Contraseña"
              onChange={handleOnChange}
            />
          </div>
          <div className={style.send}>
            <input type="submit" value="enviar" />
          </div>
        </form>
      </div>
    </div>
  );
}
