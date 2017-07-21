import React, { PropTypes } from 'react'

export default class QueryExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { p1: "loading..." };
    this.props.p.then((val) => this.setState({p1:val}))
  }

  render() {
	  console.log(this.props)

	  //const location = this.props.location
	  const params = new URLSearchParams(this.props.location.search);
	  return (
	  	<div>
		    <div>
		      The query param test = {params.get("test")}
		    </div>
		    <div>
		      Extra Data = {JSON.stringify(this.props.data)}
		    </div>
		    <div>
		    async data - {this.state.p1}
		    </div>
	    </div>
	  )
  }
}

