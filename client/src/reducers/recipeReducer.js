import {FETCH_RECIPES, CREATE_RECIPE, FETCH_RECIPE, UPDATE_RECIPE, DELETE_RECIPE} from '../actions/types';
const INITIAL_STATE = { myRecipes:[], currentRecipe:[], otherUsersRecipes:[] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, myRecipes:action.payload };
    case FETCH_RECIPE:
        return { ...state, currentRecipe:action.payload };
    case CREATE_RECIPE:
      return action.payload;
    case UPDATE_RECIPE:
        return action.payload;
    case DELETE_RECIPE:
      return state;

    default:
      return state;
  }
}
