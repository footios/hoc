import React, { Component } from 'react'

// A function that doesn't take the props, but a configuration
// Note! Do not manipulate-change state or props of the wrapped component!
// You can also return a stateful component
const withClass = (WrappedComponent, className) => {
	// If we ommit the {...props} we don't get
	// the props of the component that we wrap

	return props => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>
	)
}
export default withClass
