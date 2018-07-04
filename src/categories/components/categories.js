import React from 'react';
import Category from './category';
import './categories.css';
import SearchContainer from '../../widgets/containers/search-container';
import Media from '../../playlist/components/media';

function Categories(props){
  return (
    <div className="categories">
      <SearchContainer />
      {
        props.search.map((item) => {
          return (
            <Media
              openModal={props.openModal}
              id={item.get('id')}
              title={item.get('title')}
              author={item.get('author')}
              type={item.get('type')}
              cover={item.get('cover')}
              src={item.get('src')}
              category={item.get('category')}
              key={item.get('id')}
            />
          )
        })
      }
      {
        props.categories.map((item) => {
          return (
          	<Category 
          		// toggleModal={props.handleToggleModal}
          		key={item.get('id')} 
          		title={item.get('title')}
              description={item.get('description')}
              playlist={item.get('playlist')}
          	/>
          )
        })
      }
    </div>
  )
}

export default Categories
