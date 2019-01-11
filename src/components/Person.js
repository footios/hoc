import React from 'react'
import withClass from '../hoc/withClass'

const Person = props => {
	return (
		<div>
			<p>{props.saySomething}</p>
			<p>I am {props.name}</p>
		</div>
	)
}

export default withClass(Person)
