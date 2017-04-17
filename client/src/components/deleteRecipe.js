import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteRecipe } from '../actions/index';

class DeleteRecipe extends Component {

  constructor(props) {
   super(props);
  }

  static contextTypes = {
		router:PropTypes.object
	};

  componentWillMount() {
    this.props.deleteRecipe(this.props.params.id);
    browserHistory.push('/yourRecipes');
  }

  render() {
    return(
      <div></div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, {deleteRecipe})(DeleteRecipe);
