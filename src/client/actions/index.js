import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
  const payload = await axios.get('http://react-ssr-api.herokuapp.com/users');
  dispatch({
    type: FETCH_USERS,
    payload,
  })
};