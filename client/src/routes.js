import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Homepage from './components/homepage';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RecipesList from './components/recipesList';
import BooksList from './components/booksList';
import DeleteRecipe from './components/deleteRecipe';
import UpdateRecipe from './components/updateRecipe';
import RecipeShow from './components/recipeShow';
import NewRecipe from './components/newRecipe';
import OtherUsersRecipes from './components/otherUsersRecipes';
import Cart from './components/cart';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Homepage} />  // when I go to localhost:8080 homepage component will render
		<Route path="signin" component={Signin} />
    <Route path="signout" component={Signout} />
    <Route path="signup" component={Signup} />
		<Route path="recipes/new" component={NewRecipe} />
		<Route path="yourRecipes" component={RecipesList} />
		<Route path="usersRecipes" component={OtherUsersRecipes} />
		<Route path="books" component={BooksList} />
		<Route path="cart" component={Cart} />
		<Route path="recipes/:id" component={RecipeShow} />
		<Route path="recipes/:id/delete" component={DeleteRecipe} />
		<Route path="recipes/:id/update" component={UpdateRecipe} />
	</Route>
);
