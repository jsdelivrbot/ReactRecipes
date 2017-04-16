import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DeleteRecipe extends Component {

  constructor(props) {
   super(props);
   this.state = {myRecipes:[]};
  }
  
  static contextTypes = {
		router:PropTypes.object
	};

  componentWillMount() {
    this.props.deleteRecipe(this.props.params.id).then(() => {
				this.context.router.push('/yourRecipes');
		});
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, actions)(DeleteRecipe);
