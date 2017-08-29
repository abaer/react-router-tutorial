import React from 'react'

export default class QueryExample extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentWillMount() {
		function simpleFetch(url) {
		  return(
		    fetch(url)
		        .then(function(data) {
		        	return(data.json())
		        })
		        	.catch(function() {})
		        )
		}
        this.state = { loading: true };

        //this.props.extraProps.p().then((val) => this.setState({p1:val}))  	
        simpleFetch(this.props.extraProps.restapi).then((val) => {
            console.log(val)
            this.setState({ restapi: val, loading: false })
        })
    }

    render() {
        const params = new URLSearchParams(this.props.location.search);
        if (this.state.loading === true) {
            return ( < div > Loading... < /div>)

        } else {
            return ( 
            <div>
                <div>
                	The query param test = { params.get("test") } 
                </div> 
                <div>
                	Extra Data = { JSON.stringify(this.props.extraProps.data) } 
                </div>

                <div>
                	async data - {this.state.restapi.weather[0].description} {this.state.restapi.main.temp} { JSON.stringify(this.state.restapi, null, 3 )} 
                </div> 
            </div>
            )
        }
    }
}