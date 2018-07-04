import React from 'react';
import MediaContainer from '../containers/media';
// import Play from '../../icons/components/play';

function Playlist(props){
  // const playlist = props.data.categories[0].playlist;
  // console.log(playlist);
  return (
    <div className="playlist">
      {
        props.playlist.map((mediaId)=>{
          return (
            <MediaContainer 
              openModal={props.toggleModal}
              id={mediaId} 
              key={mediaId}
            />
          )
        })
      }
    </div>
  )
}

export default Playlist;
