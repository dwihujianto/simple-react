import React from 'react'

import { Button } from 'react-bootstrap'

class AddItem extends React.Component {
	constructor(props) {
		super(props)
		
		this.changeAnimal = this.changeAnimal.bind(this)
		this.addAnimal = this.addAnimal.bind(this)

		this.state = {
			name:""
		}


	}
	
	changeAnimal(evt) {
		this.setState({
			name:evt.target.value
		})
	}

	addAnimal() {
		this.props.onAdd(this.state.name)

		this.setState({
			name:""
		})
	}


	render() {
		return (
			<div className="form-inline">
	            <div className="form-group">
	              <input type="text" value={this.state.name} onChange={this.changeAnimal} className="form-control"/>
	              <Button onClick={this.addAnimal}>Add</Button>
	            </div>
          	</div>  
		)
	}
}

export default AddItem