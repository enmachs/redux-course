import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css'
function Category(props) {
  return (
    <div className="category">
      <p className="category-description">{props.description}</p>
      <h2 className="category-title">{props.title}</h2>
      <Playlist
      	toggleModal={props.toggleModal}
        playlist={props.playlist}
      />
    </div>
  )
}

export default Category
