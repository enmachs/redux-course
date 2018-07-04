import React from 'react';
import './home-layout.css';

function homeLayout(props) {
  return (
    <section className="home-layout">
      {props.children}
    </section>
  )
}
 export default homeLayout
