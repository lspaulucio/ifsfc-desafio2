import {Component } from 'react'
import api  from './api'

function showRoutes(route) {
	return (
		
	<div id="routes">  
		<h3>
			Titulo: {route.title}</h3>
		<h4>
		 	Posição Inicial: Latitude {route.startPosition.lat} Longitude {route.startPosition.lng}
		</h4>
		<h4>
		  	Posição Final: Latitude {route.endPosition.lat} Longitude {route.endPosition.lng}
		</h4>
	</div>

	);
  }


class Routes extends Component {

	state = {
		routes: [
			{title: '', 
			startPosition: {
				lat: Number,
				lng: Number
			},
			endPosition: {
				lat: Number,
				lng: Number
			}}
		] 
	}

	componentDidMount(){
	 api.get('/routes')
		.then(res => {
			this.setState({routes: res.data})
		});
	}
	render(){

		const {routes} = this.state;
		return(
			<div>
				<h1>Imersão Full Cycle - Desafio 2</h1>
				{routes.map(showRoutes)}
			</div>
		)
	}
}
	
export default Routes
