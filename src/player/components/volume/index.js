import React from "react";
import VolumeIcon from '../../../icons/components/volume';
import './main.css';

const Volume = (props) => (
  <button 
    className='volume'
    onClick={props.handleMuteEvent}
  >
    <VolumeIcon
      color='white'
      size={20}
    />
    <div className="volume-range">
      <input 
        min={0}
        max={1}
        step={.05}
        type="range"
        onChange={props.handleVolumeChange}
      />
    </div>  
    
  </button>
)

export default Volume;