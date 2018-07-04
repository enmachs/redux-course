import React from 'react';
import './main.css';

const Spinner = (props) => {
  if (!props.active) return null
  return (
    <div className="spinner">
      <span>Cargando...</span>
    </div>
  )
}

export default Spinner;
