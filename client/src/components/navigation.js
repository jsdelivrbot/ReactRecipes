import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Navigation extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <li key={1}>
        <Link to="/signout" key={11}>Sign Out</Link>
      </li>
    } else {
      // show a link to sign in or sign up
      return [
        <li key={2}>
          <Link to="/signin" key={12}>Sign In</Link>
        </li>,
        <li key={3}>
          <Link to="/signup" key={13}>Sign Up</Link>
        </li>
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
  	       <Link to={"/"} key={14}>
              <img src={'http://granatos.com/media/easybanner/recipe-header-image.png'} alt="Discover thousands recipes" className="header-img" />
            </Link>
            <nav>
                    <div className="navbar-header">
                        <ul className="nav navbar-nav menu">
                            <li key={5}><Link to={"/yourRecipes"} key={15}>My Recipes</Link></li>
                            <li key={6}><Link to={"/usersRecipes"} key={16}>Users Recipes</Link></li>
                            {this.renderLinks()}
                        </ul>
                    </div>
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
