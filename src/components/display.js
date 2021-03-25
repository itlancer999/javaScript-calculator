import React from 'react';
import "../components/display.scss";

class Display extends React.Component {
    render(){
        return(
        	<div className="Display">
        	{this.props.data}
        	</div>
        	);
    }
}

export default Display;