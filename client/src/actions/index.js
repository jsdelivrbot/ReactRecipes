import axios from 'axios';
import { browserHistory } from 'react-router';
import {
   FETCH_RECIPES,
   CREATE_RECIPE,
   FETCH_RECIPE,
   UPDATE_RECIPE,
   DELETE_RECIPE,
   AUTH_USER,
   UNAUTH_USER,
   AUTH_ERROR,
} from './types';



export function createRecipe(chef, name, description){
  console.log(chef, name, description);
  const request = axios.post('http://localhost:3001/recipes/new', {chef, name, description} );
	return {
		type: CREATE_RECIPE,
		payload: request
	};
}


export function fetchRecipe(id) {
  let url = 'http://localhost:3001/recipes/'+id;
  return function (dispatch) {
    axios.get(url)
      .then(response => {
        dispatch({
          type: FETCH_RECIPE,
          payload: response.data
        });
      });
    }
}


export function fetchMyRecipes(chef){
  const request = axios.get('http://localhost:3001/your-recipes/'+chef);
	return {
		type: FETCH_RECIPES,
		payload: request
	};
}


export function fetchOthersRecipes(chef){
  const request = axios.get('http://localhost:3001/others-recipes/'+chef);
	return {
		type: FETCH_RECIPES,
		payload: request
	};
}



export function updateRecipe(id, chef, name, description){
  const request = axios.put('http://localhost:3001/recipes/update/'+id, {chef, name, description });
	return {
		type: UPDATE_RECIPE,
		payload: request
	};
}


export function deleteRecipe(id){
  const request = axios.delete('http://localhost:3001/recipes/'+id);
	return {
		type: DELETE_RECIPE
	};
}

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post('http://localhost:3001/users/signin', { email, password }).then(response => {
        if (response.data.username){
          dispatch({ type: AUTH_USER, payload:response.data }); // If request is good update state to indicate user is authenticated
          localStorage.setItem('token', response.data.token); // - Save the JWT token
          browserHistory.push('/');
        }
      }).catch(() => {dispatch(authError('Bad Login Info'));});
  }
}


export function signupUser({ email, username, password }) {
  return function(dispatch) {
    axios.post('http://localhost:3001/users/signup', { email, username, password }).then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      }).catch(response => dispatch(authError('response.data.error')));
  }
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}
