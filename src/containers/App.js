import React, { Component } from 'react'
import Header from '../components/Header'
import Person from '../components/Person'
import withClass from '../hoc/withClass'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'fotis',
			saySomething: 'hello'
		}
	}

	render() {
		return (
			<div className="AppClass">
				<Header title={this.props.appTitle} />
				<Person name={this.state.name} saySomething={this.state.saySomething} />
			</div>
		)
	}
}

export default withClass(App, App)
