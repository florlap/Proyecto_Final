import { TextField } from "@mui/material";
import { NumberFormatBase } from "react-number-format";
//import { NumberFormat } from "react-number-format";
import style from "./creapagos.module.css";


export default function CreaPagos(props) {
  return (
    <div>
      <div className={style.container}>
        <form className={style.form}>
          <div className={style.alumno}>
            <TextField id="outlined-search" label="Alumno" type="search" size="small"
            />
          </div>
          <div className={style.asunto}>
            <TextField id="outlined-search" label="Asunto" type="search" size="small"/>
          </div>
          <div className={style.valor}>
            <TextField id="outlined-search" label="Valor" type="search" size="small"/>
          </div>
          <div className={style.venc}>
            <TextField id="outlined-search" label="Fecha de venc." type="search" size="small"/>
          </div>
          <div className={style.venc}>
            <TextField id="outlined-search" label="Fecha de venc." type="search" size="small"/>
          </div>
          <div className={style.otr}>
            <TextField id="outlined-search" label="Fecha de venc."type="number" size="small"/>
          </div>
          <NumberFormatBase
      // {...other}
      // getInputRef={ref}
      // onValueChange={(values) => {
        // onChange({
        //   target: {
        //     name: props.name,
        //     value: values.value,
        //   },
        // });
      // }}
      thousandSeparator
      isNumericString
      prefix="$"
    />
        </form>
      </div>
    </div>
  );
}

let pago = {
  subject: "",
  amount: "",
  expirationDate: "",
  detail: "",
  students: ["1", "2"],
};

/// subiendo 
