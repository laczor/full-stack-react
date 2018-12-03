import axios from 'axios';  // this is the library, which we use to make http call
import { FETCH_USER } from './types';   // this is type, simply a string, to identify action

// Since we applied redux-thunk--> this async dispatch action, will be executed and the store will be modified
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};
