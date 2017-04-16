import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RecipeShow extends Component {

  constructor(props) {
		super(props);
	}
  
  componentWillMount() {
    this.props.fetchRecipe(this.props.params.id);
  }

  render() {
    return (
      <div>
        Name: {this.props.currentRecipe.name}<br />
        Description: {this.props.currentRecipe.description}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentRecipe: state.recipeReducer.currentRecipe
  };
}

export default connect(mapStateToProps, actions)(RecipeShow);
