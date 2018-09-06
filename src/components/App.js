import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { fetchEvents } from '../actions/events';
import {
FETCH_EVENTS
} from '../actions/constants'
export class App extends Component {

	constructor() {
		super();
	}

	componentDidMount() {
		this.props.fetchEvents();
	};

	// getEvents() {
	//   setTimeout(() => { 
	//     this.props.fetchEvents();
	//   }, 3000);
	// };



	render() {
		let eventsArray;

		if (this.props.events.fetchSuccess) {
			const events = this.props.events.events;
			eventsArray = events.map(event => {
				return (
					<li key={event.id}>
						{event.title}
					</li>
				);
			});
		}
		else {
			return (
				<div>
					<h1>LOADING... :)</h1>
				</div>
			)
		}


		

		return (
			<div>
				<div className="App">
					<h1>STUBHUB API APP</h1>
				</div>

				<div>
					<h1>Concerts for Beck via SeatGeak API</h1>
					<ul>
						{eventsArray}
					</ul>
				</div>
			</div>

		);
	};
	};

	const mapStateToProps = state => {
	return {
		events: state.events,
		isLoading: state.isLoading,
		fetchSuccess: state.fetchSuccess
	};
	};

	const mapDispatchToProps = (dispatch) => {
	return {
		fetchEvents: () => {
			dispatch(fetchEvents());
		}
	};
	};

	export default connect(mapStateToProps, mapDispatchToProps)(App);