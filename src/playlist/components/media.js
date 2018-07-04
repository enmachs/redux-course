import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './main.css';

class Media extends PureComponent {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     author: props.author
  //   }
  // }
  // state = {
  //   author: this.props.author
  // }
  handleClick = (event) => { //El arrowFunction obtiene directamente el contexto del padre
    // this.props.dispatch
    // console.log(this.props.image);
    // this.setState({
    //   author: 'Orlando Martinez'
    // });
    // console.log(this.props)
    this.props.openModal(this.props.id);
  }
  render(){
    return(
      <div className="card my-card" onClick={this.handleClick}>
        <img
          className="card-img-top"
          src={this.props.cover}
          alt=""
          width={318}
          height={180}
        />
        <div className="card-block">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio'])
}

export default Media;
