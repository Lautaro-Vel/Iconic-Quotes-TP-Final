import React from "react";
import "./SpinnerLoading.css";

const Spinner = () => (
  <div className="spinner-container">
    <div className="spinner"></div>
    <span className="spinner-text">Cargando...</span>
  </div>
);

export default Spinner;