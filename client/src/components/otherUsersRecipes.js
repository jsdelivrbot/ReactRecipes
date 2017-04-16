import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { fetchOthersRecipes } from '../actions/index';

class OtherUsersRecipes extends Component {

  static contextTypes = {
		router:PropTypes.object
	};

  constructor(props) {
   super(props);
   this.state = {myRecipes:[]};
  }

  componentWillMount(){
		if (this.props.authenticated){
      this.props.fetchOthersRecipes(this.props.signedInUserInfo.username);
    }
    else {
      this.context.router.push('/signin');
    }
  }

  renderRecipes(){
    if (this.props.myRecipes.data){
      return this.props.myRecipes.data.map(function(recipe){
        return (
          <li className="list-group-item" key={recipe._id}>
              <div className="row">
                <Link to={"/recipes/"+recipe._id} className="navbar-text col-md-12">
									{recipe.name} - {recipe.chef}
								</Link>
              </div>
          </li>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <h3>Others Recipes</h3>
        <ul className="list-group">
          {this.renderRecipes()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    myRecipes: state.recipeReducer.myRecipes,
    authenticated: state.auth.authenticated,
    signedInUserInfo:state.auth.signedInUserInfo
  };
}

export default connect(mapStateToProps, {fetchOthersRecipes})(OtherUsersRecipes);
