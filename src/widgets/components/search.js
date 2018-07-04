import React from 'react';
import './search.css';
// function Search(props){

// }

const Search = (props) => (
  <form
    onSubmit={props.handleSubmit}
    className="search">
    <input
      ref={props.setRef}
      type="text"
      className="search-input"
      placeholder="Busca tu video favorito"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search;
