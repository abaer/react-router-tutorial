import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import App from './App';
import ParamsExample from './ParamsExample'
import Home from './Home'
import QueryExample from './QueryExample'
import ProgrammaticExample from './ProgrammaticExample'
import FourOFour from './404Example'
import './index.css';

var p1 = new Promise(function(resolve, reject) { 
    setTimeout(resolve, 2000, 'one'); 
});

const data = {"name":"alan", "location": "berkeley"}

ReactDOM.render(
	<BrowserRouter>
	<div>
		<Route path="/" component={App} />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/post/:id" component={ParamsExample} />
			<Route path='/query' render={(props) => (
			  <QueryExample {...props} data={data} p={p1}/>
			)}/>
			<Route path="/programmatic" component={ProgrammaticExample} />
			<Route component={FourOFour}/>
		</Switch>
	</div>
	</BrowserRouter>, document.getElementById('root')
)