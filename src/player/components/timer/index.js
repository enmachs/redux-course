import React from 'react';
import './main.css';

const Timer = (props) => (
  <div className='timer'>
    <p>
      <span>{props.currentTime} / {props.duration}</span>
    </p>
  </div>
)

export default Timer;
