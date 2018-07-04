import React from 'react';
import './main.css';

const ProgressBar = (props) => (
  <div className="progress-bar">
    <input
      type="range"
      min={0}
      max={props.duration}
      value={props.value}
      onChange={props.handleProgressChange} 
    />
  </div>
)

export default ProgressBar;
