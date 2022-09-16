import http from '../http-common';

const getRandomMessage = () => http.get('/messages');
const RailsService = {
  getRandomMessage,
};
export default RailsService;
