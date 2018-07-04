import React from 'react';
import './main.css';

const VideoPlayerControls = (props) => (
  <div className="video-player-controls">
    {props.children}
  </div>
)

export default VideoPlayerControls;
