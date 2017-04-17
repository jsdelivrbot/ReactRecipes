import React, { Component } from 'react';
import Navigation from './navigation';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="my-container">
          {this.props.children}
        </div>
        <div id="footer">Copyright - Company</div>
      </div>
    );
  }
}
