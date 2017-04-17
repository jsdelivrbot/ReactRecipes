import React, {Component, PropTypes} from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {updateRecipe} from '../actions/index';
import {Link} from 'react-router';
import {browserHistory} from 'react-router';

class UpdateRecipe extends Component {

	// hey, I want access to this property from parent component
	static contextTypes = {
		router:PropTypes.object
	};


	constructor(props) {
    super(props);
		this.state = { currentRecipe:[], recipename:'', recipedescription:'' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

	componentDidMount(){
		var recipesNumber = Object.keys(this.props.myRecipes.data).length;
		for (let i = 0; i < recipesNumber; i++){
			if (this.props.params.id === this.props.myRecipes.data[i]._id){
				this.setState({currentRecipe: this.props.myRecipes.data[i]});
			}
		}
	}


	handleInputChange(event) {
    const target = event.target;
		const value = target.value;
    const name = target.name;
		if (name === "recipename"){
    	this.setState({recipename: value});
		}
		else if (name === "recipedescription"){
			this.setState({recipedescription: value});
		}
  }


	onSubmit(props){
		updateRecipe(
				this.state.currentRecipe._id,
				this.state.currentRecipe.chef,
				this.state.recipename,
				this.state.recipedescription
			);
				browserHistory.push('/yourRecipes');
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
					<input
							type="text"
							key={this.state.currentRecipe.name}
							name="recipename"
							defaultValue={this.state.currentRecipe.name}
							onChange={this.handleInputChange}
							className="form-control" {...name} />
				</div>
				<div>
					<label>Description</label>
					<input
							type="text"
							key={this.state.currentRecipe.description}
							name="recipedescription"
							defaultValue={this.state.currentRecipe.description}
							onChange={this.handleInputChange}
							className="form-control" {...description} />
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
function mapStateToProps(state){
	return {
  	myRecipes: state.recipeReducer.myRecipes
	};
}

UpdateRecipe = connect(mapStateToProps, updateRecipe)(UpdateRecipe);

export default reduxForm({
	form: 'NewRecipeForm', // the name could be whatever you want
	fields: ['name','description'],
	validate
}, null, { updateRecipe })(UpdateRecipe);
