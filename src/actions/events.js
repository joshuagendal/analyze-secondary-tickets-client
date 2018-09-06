import {
  FETCHING_EVENTS,
  EVENTS_FETCH_SUCCESS
} from './constants';
// import {
//   getBeckEvents
// } from './services';
import axios from 'axios';

export const setEvents = ( events ) => (
  {
    type: EVENTS_FETCH_SUCCESS,
    events: events,
    isLoading: false,
    fetchSuccess: true
  }
)

export const eventsLoading = () => (
  {
    type: FETCHING_EVENTS,
    isLoading: true
  }
)

export const fetchEvents = () => {

  return dispatch => {
    dispatch(eventsLoading());
    return axios.get('https://api.seatgeek.com/2/events?performers.slug=beck&client_id=ODI3MTg3NXwxNTM1MTM0NTYwLjkz')
      .then(response => {
        const events = response.data.events;
        console.log('GETSBECKEVENTS');
        dispatch(setEvents(events));
      })
      .catch(err => {
        console.log('service error', err);
        return err
      });
    // return getBeckEvents
		// 	.then(response => { 
    //     const events = response;
    //     dispatch(setEvents(response));
		// 	})
		// 	.catch(err => {
		// 		console.log('ERROR!!!!', err);
		// 	});

  }
}
