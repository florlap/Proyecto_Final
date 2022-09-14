import { useState } from "react";
import { resetPassword, cleanerUser} from "../../redux/actions";
import style from "./change.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Change(props) {
const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  let navigate = useNavigate();

  const initialState = {
    password: "",
    newPassword: ""
  }

  const [reset, setReset] = useState(initialState);

  function handleOnSubmit(e) {
    e.preventDefault();
    resetPassword({
      type: "CHANGE",
      idUser: user[0].idUser,
      password: reset.password
    });
    setReset(initialState);
    dispatch(cleanerUser());
    navigate("/login");
  }

  function handleOnChange(e) {
    setReset({...reset, [e.target.name]: e.target.value});

  }
  return (
    <div>
      <div className={style.contenedor}>
        <form className={style.change} onSubmit={handleOnSubmit}>
          <div className={style.message}>
            <label>Cambie su contraseña</label>
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
