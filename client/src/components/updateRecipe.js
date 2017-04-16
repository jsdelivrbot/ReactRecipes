import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import {updateRecipe} from '../actions/index';
import {Link} from 'react-router';

class UpdateRecipe extends Component {

	// hey, I want access to this property from parent component
	static contextTypes = {
		router:PropTypes.object
	};

	onSubmit(props){
		this.props.updateRecipe(props).then(() => {
			// recipe has been updated, navigate the user to the index
			// We navigate by calling this.context.router.push with the new path to navigate to.
			this.context.router.push('/yourRecipes');
		});
	}

	render(){
		//const {fields: {name, description}, handleSubmit} = this.props; // stessa cosa delle 2 istruzioni qui sotto
		const name = this.props.fields.name;
		const description = this.props.fields.description;
  	const handleSubmit = this.props.handleSubmit;
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Update recipe</h3>
				<div>
					<label>Name</label>
					<input type="text" className="form-control" {...name} />
				</div>
				<div>
					<label>Description</label>
					<input type="text" className="form-control" {...description} />
				</div>
				<button type="submit" className="btn btn-primary btn-primary-spacing">Submit</button>
				<Link to="/yourRecipes" className="btn btn-danger btn-primary-spacing">Cancel</Link>
			</form>
		);
	}
}


function validate(values){
	const errors = {};
	if (!values.name){
		errors.name = 'Enter a name';
	}
	if (!values.description){
		errors.description = 'Enter a description';
	}
	return errors;
}

// connect and reduxForm are equivalent
// connect first argument is MapStateToProps, 2nd argument is mapDispatchToProps
// reduxForm 1st argument is form config, 2nd argument is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'NewRecipeForm', // the name could be whatever you want
	fields: ['name','description'],
	validate
}, null, { updateRecipe })(UpdateRecipe);
