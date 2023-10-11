import React from 'react';
import Video from '../../assets/sunrise.mp4';

const VideoPlayer = () => {
  return (
    <div>
      <video controls  className = "hellovideo" width="300" height="200">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};


export default VideoPlayer;

