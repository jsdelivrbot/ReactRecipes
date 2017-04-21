import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { fetchMyRecipes } from '../actions/index';

class RecipesList extends Component {

  static contextTypes = {
		router:PropTypes.object
	};

  constructor(props) {
    super(props);
    this.state = { myRecipes:[] };
  }

  componentWillMount(){
    var self = this;

    if (this.props.authenticated){
      this.props.fetchMyRecipes(this.props.signedInUserInfo.username).then(function(){
        self.setState({ myRecipes: self.props.myRecipes});
      });
    }
    else {
      this.context.router.push('/signin');
    }
  }


  renderRecipes(){
    console.log(JSON.stringify(this.props.myRecipes));
    if ((this.props.myRecipes) && (this.props.myRecipes.data)){   // ordine delle condizioni importante!
      return this.props.myRecipes.data.map(function(recipe){
          return (
              <li className="list-group-item" key={recipe._id}>
                  <div className="row">
                    <Link to={"/recipes/"+recipe._id} className="navbar-text col-md-8" key={1}>{recipe.name}</Link>
                    <Link to={"/recipes/"+recipe._id+"/delete"} className="btn btn-danger col-md-2" key={2}>Delete</Link>
                    <Link to={"/recipes/"+recipe._id+"/update"} className="btn btn-warning col-md-2" key={3}>Update</Link>
                  </div>
              </li>
          );
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <h3>Your Recipes</h3>
          <ul className="list-group">
            {this.renderRecipes()}
          </ul>
        </div>
        <div className="text-xs-left">
          <Link to="/recipes/new" className="btn btn-primary addRecipeBtn" key={4}>
              Add a recipe
          </Link>
        </div>
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

export default connect(mapStateToProps, {fetchMyRecipes})(RecipesList);
