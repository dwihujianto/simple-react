import React from 'react'

import { ListGroup , ListGroupItem } from 'react-bootstrap'

import AddItem from './AddItem'

class ListItem extends React.Component {
	constructor(props) {
		super(props)

		this.addNewAnimal = this.addNewAnimal.bind(this)

		const ANIMALS = [
			{ id:1 , name:"Cat" },
			{ id:2 , name:"Dog" },
			{ id:3 , name:"Moo" }
		]

		this.state = {
			animals:ANIMALS
		}

	}

	addNewAnimal(name) {
		let animalsList = this.state.animals

		let incrId = animalsList.length + 1

		animalsList.push({
			id:incrId,
			name:name
		})

		this.setState({
			animals:animalsList
		})

	}
	
	render() {

		return (
			<div>
				<ListGroup>
					{ this.state.animals.map(animal => {
				    	return <ListGroupItem key={animal.id}>{ animal.name }</ListGroupItem>
					}) }
				</ListGroup>
				<AddItem onAdd={this.addNewAnimal}/>
			</div>
		)
	}
}

export default ListItem