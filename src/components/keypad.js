 import React from 'react';
 import'../components/keypad.scss';

 class Keypad extends React.Component {
 	render(){
 		return(

 			<div className="Keypad">
 			{this.props.children}
 			</div>
 			);
 	}
 }

 export default Keypad;