import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Navigation extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return [
        <ul className="nav navbar-nav menu">
            <li><Link to={"/yourRecipes"}>My Recipes</Link></li>
            <li><Link to={"/usersRecipes"}>Users Recipes</Link></li>
            <li><Link to={"/books"}>Books</Link></li>
            <li><Link to={"/signout"}>Sign Out</Link></li>
            <li><Link to={"/cart"}>Cart</Link></li>
        </ul>
      ];
    } else {
      return [
        <ul className="nav navbar-nav menu">
            <li><Link to={"/yourRecipes"}>My Recipes</Link></li>
            <li><Link to={"/usersRecipes"}>Users Recipes</Link></li>
            <li><Link to={"/books"}>Books</Link></li>
            <li><Link to={"/signin"}>Sign In</Link></li>
            <li><Link to={"/signup"}>Sign Up</Link></li>
        </ul>
      ];
    }
  }

  renderGreetings(){
    if (this.props.authenticated){
      return [
        <div className="greetings">
          Hello,  {this.props.signedInUserInfo.username}
        </div>
      ];
    }
  }

  render() {
      return (
        <div>
  	       <Link to={"/"}>
              <img src={'http://granatos.com/media/easybanner/recipe-header-image.png'} alt="Discover thousands recipes" className="header-img" />
            </Link>
            <nav>
            {this.renderLinks()}
            </nav>
            <nav>
              <div>{this.renderGreetings()}</div>
            </nav>
          </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    signedInUserInfo:state.auth.signedInUserInfo
  };
}

export default connect(mapStateToProps)(Navigation);
