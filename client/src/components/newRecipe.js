import React, {Component, PropTypes} from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';
import {browserHistory} from 'react-router';

const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
        </div>
    );
}


class NewRecipe extends Component {
	static contextTypes = {
		router:PropTypes.object
	};

  handleFormSubmit({ chef, name, description }) {
      this.props.createRecipe(this.props.signedInUserInfo.username, name, description);
      browserHistory.push('/yourRecipes');
  }

  render(){
      const { handleSubmit } = this.props;

      return (
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field name="chef" type="hidden" value={this.props.signedInUserInfo.username} component={renderInput} />
              <div className="form-group">
                  <label>Name:</label>
                  <Field name="name" type="name" component={renderInput} />
              </div>
              <div className="form-group">
                  <label>Description:</label>
                  <Field name="description" type="description" component={renderInput} />
              </div>
              <button action="submit" className="btn btn-primary">Add Recipe</button>
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


function mapStateToProps(state) {
  return {
    signedInUserInfo:state.auth.signedInUserInfo
  };
}

NewRecipe = connect(mapStateToProps, actions)(NewRecipe);
NewRecipe = reduxForm({
 form: 'NewRecipe',
 validate
})(NewRecipe);
export default NewRecipe;
