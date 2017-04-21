import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import bookReducer from './bookReducer';
import authReducer from './auth_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  recipeReducer: recipeReducer,
  auth: authReducer,
  bookReducer: bookReducer
});

export default rootReducer;
