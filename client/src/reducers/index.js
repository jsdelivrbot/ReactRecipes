import { combineReducers } from 'redux';
import recipeReducer from './recipeReducer';
import authReducer from './auth_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  recipeReducer: recipeReducer,
  auth: authReducer
});

export default rootReducer;
