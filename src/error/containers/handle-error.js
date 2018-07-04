import React, {Component} from 'react';
import RegularError from '../components/regular-error';

class HandleError extends Component {
	state = {
		handleError: false,
		myError: ''
	}
	componentDidCatch(err, info){
		this.setState({
			handleError: true
		})
	}
	render(){
		if(this.state.handleError){
      return (
				<RegularError 
					text={this.state.myError}
				/>
			)
      // return <h1>asasdsadsdasda</h1>
    }
    return this.props.children
	}
}


export default HandleError