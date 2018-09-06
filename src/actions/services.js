import axios from 'axios';

const service = axios.create({
  baseURL: 'https://api.seatgeek.com/2/events?performers.slug=beck&client_id=ODI3MTg3NXwxNTM1MTM0NTYwLjkz'
});


export const getBeckEvents = service
  .get()
  .then(response => {
    console.log('====================================');
    console.log('GETSBECKEVENTS');
    console.log('====================================');
    return response.data.events
  })
  .catch(err => {
    console.log('ERROR');
  });
