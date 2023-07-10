import React, { Children } from "react";
import "../styles/Boton.css";

const BotonClear = (props) => {
  return <div className="boton-clear" onClick={props.manejarClear}>Clear</div>;
};

export default BotonClear;
