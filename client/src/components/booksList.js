import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import { addToCart, fetchBooks } from '../actions/index';

class BooksList extends Component {

  constructor(props) {
    super(props);
    this.state = { myBooks:[] };
    this.handleClick = this.handleClick.bind(this);

  }

  static contextTypes = {
		router:PropTypes.object
	};

  componentWillMount(){
    var self = this;

    if (this.props.authenticated){
      this.props.fetchBooks().then(function(){
        self.setState({ myBooks: self.props.myBooks});
      });
    }
    else {
      this.context.router.push('/signin');
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addToCart(e.target.value, this.props.signedInUserInfo._id).then(function(){
      console.log("aggiunto al carrello");
    });
  }


  renderBooks(){
    if ((this.props.myBooks) && (this.props.myBooks.data)){   // ordine delle condizioni importante!
      return this.props.myBooks.data.map((book) => {
          return (
                  <div className="row">
                    <table className="table-responsive" id="books-table">
                      <tbody>
                        <tr className="table-danger">
                          <td className="navbar-text col-md-12">
                            <p className="bookTitle" key={book.title}>{book.title}</p>
                            <p className="bookChefAndPages" key={book.chef}>{book.chef} - {book.pages} pag.</p>
                          </td>
                        </tr>
                        <tr className="table-warning">
                          <td className="navbar-text col-md-8 bookPlot">
                            <p key={book.plot}>{book.plot}</p>
                            <p key={book._id}>
                              <button className="btn btn-success" value={book._id} onClick={this.handleClick}>
                              Add to cart
                              </button>
                            </p>
                          </td>
                          <td className="navbar-text col-md-4">
                            <img className="bookImage" src={"./src/components/img/books/"+book.image+".png"} />
                          </td>
                        </tr>
                        <tr><td className="emptyrow">&nbsp;</td></tr>
                      </tbody>
                    </table>
                  </div>
          );
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <h3>Buy books from our chefs</h3>
          <ul className="list-group">
            {this.renderBooks()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    myBooks: state.bookReducer.myBooks,
    authenticated: state.auth.authenticated,
    signedInUserInfo:state.auth.signedInUserInfo
  };
}

export default connect(mapStateToProps, {addToCart, fetchBooks})(BooksList);
