import React from 'react';
import './modal.css';
function Modal(props){
  return(
    <div className="modal">
      {props.children}
      <button 
        onClick={props.handleClick}
        className='modal-close'
      />
    </div>
  )
}

export default Modal
