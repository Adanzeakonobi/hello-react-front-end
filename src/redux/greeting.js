import RailsService from '../services/RailsService';

const SET_GREET = 'messages/greet/SET_GREET';

async function setGreeting(dispatch, getState) {
  const { greeting } = getState();
  const { data } = await RailsService.getRandomMessage();
  let payload = {
    ...data,
  };
  if (Object.keys(greeting).length === 0) {
    payload = { body: '' };
  }
  dispatch({ type: SET_GREET, payload });
}

export default function reducer(state = { body: '' }, action) {
  switch (action.type) {
    case SET_GREET:
      return action.payload;
    default:
      return state;
  }
}

export { setGreeting };
