import React, { Component } from 'react'
import Header from '../components/Header'
import Person from '../components/Person'
import withClass from '../hoc/withClass'

import './App.css'

const myCssStyle = {
	maxWidth: '300px',
	margin: '0 auto',
	padding: '4px',
	textAlign: 'center',
	backgroundColor: '#ff9',
	border: '5px solid red'
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			saySomething: 'hello',
			name: 'fotis'
		}
	}

	render() {
		return (
			<div className="CssApp">
				<Header title={this.props.appTitle} />
				<Person name={this.state.name} saySomething={this.state.saySomething} />
			</div>
		)
	}
}

export default withClass(App, myCssStyle)
