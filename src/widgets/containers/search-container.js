import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import { searchEntities } from '../../actions/index';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/index';

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    // console.log(this.input.value, 'submit');
    this.props.actions.searchEntities(this.input.value)
  };
  setInputRef = (el) => {
    this.input = el;
  };
  handleInputChange = (ev) => {
    this.setState({
      value: this.input.value.replace(' ', '-')
    });
  };
	render(){
		return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
		)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer);
